// 28-10-25
// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const multer = require('multer'); 
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb'); 
const { Readable } = require('stream'); 

// Database connection
const conn = mongoose.connection;
let gridFSBucket;
conn.once('open', () => {
  gridFSBucket = new GridFSBucket(conn.db, {
    bucketName: 'uploads'
  });
  console.log('GridFSBucket ready (Native Driver)');
});

// 1. Multer configuration (Memory Storage)
// File ko disk par nahi, RAM mein rakhega
const storage = multer.memoryStorage(); 

const upload = multer({
  storage: storage, // Storage badal gaya
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Helper function: Buffer ko GridFS mein upload karne ke liye
const uploadToGridFS = (file) => {
  return new Promise((resolve, reject) => {
    const filename = crypto.randomBytes(16).toString('hex') + path.extname(file.originalname);
    
    // Buffer se Readable Stream banayein
    const readStream = Readable.from(file.buffer);
    
    // GridFS mein upload stream kholein
    const uploadStream = gridFSBucket.openUploadStream(filename, {
      contentType: file.mimetype
    });

    uploadStream.on('finish', () => {
  resolve(filename); 
});

    uploadStream.on('error', (err) => {
      reject(err);
    });

    // Stream ko pipe karein
    readStream.pipe(uploadStream);
  });
};

// 2. Add new product
router.post('/products', auth, upload.single('bannerImage'), async (req, res) => {
  try {
    console.log('=== ADD PRODUCT ROUTE (Memory Storage) ===');
    const { title, description, category, price, priceUnit } = req.body;

    if (!title || !description || !category || !price || !priceUnit) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    let bannerImageFilename = null;
    if (req.file) {
      // File ko memory se GridFS mein manually upload karein
      bannerImageFilename = await uploadToGridFS(req.file);
    }

    const product = new Product({
      title,
      description,
      category,
      price: parseFloat(price),
      priceUnit,
      bannerImage: bannerImageFilename, 
      createdBy: req.user.userId
    });

    await product.save();
    res.status(201).json({ 
      success: true, 
      message: 'Product added successfully', 
      product 
    });
    
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// 3. Image ko serve (dikhane) ka route (Yeh same rahega)
router.get('/image/:filename', (req, res) => {
  if (!gridFSBucket) {
    return res.status(500).json({ message: 'GridFS not initialized' });
  }
  try {
    const filename = req.params.filename;
    const readStream = gridFSBucket.openDownloadStreamByName(filename);
    readStream.on('error', (err) => {
      res.status(404).json({ message: 'Image not found' });
    });
    readStream.pipe(res);
  } catch (error) {
    res.status(500).json({ message: 'Server error serving image' });
  }
});


// 4. Get all products (Yeh same rahega)
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    const productsWithFullUrls = products.map(product => ({
      ...product._doc,
      bannerImage: product.bannerImage 
        ? `https://infinity-gnua.onrender.com/api/admin/image/${product.bannerImage}`
        : '/Images/placeholder-property.jpg'
    }));
    res.json({ success: true, products: productsWithFullUrls });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Helper function: GridFS se file delete karne ke liye
const deleteFromGridFS = (filename) => {
  if (!gridFSBucket) return;
  gridFSBucket.find({ filename: filename }).toArray((err, files) => {
    if (files && files.length > 0) {
      gridFSBucket.delete(files[0]._id, (deleteErr) => {
         if(deleteErr) console.error("Error deleting old GridFS file:", deleteErr);
      });
    }
  });
};

// 5. Delete product (Yeh same rahega)
router.delete('/products/:id', auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (product.bannerImage) {
      deleteFromGridFS(product.bannerImage);
    }
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


// 6. Update product
router.put('/products/:id', auth, upload.single('bannerImage'), async (req, res) => {
  try {
    const { title, description, category, price, priceUnit } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Details update karein
    product.title = title;
    product.description = description;
    product.category = category;
    product.price = price;
    product.priceUnit = priceUnit;
    product.updatedAt = new Date();

    if (req.file) {
      // Nayi file aayi hai
      // 1. Purani file delete karein
      if (product.bannerImage) {
        deleteFromGridFS(product.bannerImage);
      }
      // 2. Nayi file upload karein
      product.bannerImage = await uploadToGridFS(req.file); // Naya filename save karein
    }

    await product.save();
    res.json({
      success: true,
      message: 'Product updated successfully',
      product
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;



// // routes/adminRoutes.js
// const express = require('express');
// const router = express.Router();
// const Product = require('../models/Product');
// const auth = require('../middleware/auth');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// // Ensure uploads directory exists
// const uploadsDir = path.join(__dirname, '../uploads');
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// // Multer configuration for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024 // 5MB limit
//   },
//   fileFilter: function (req, file, cb) {
//     if (file.mimetype.startsWith('image/')) {
//       cb(null, true);
//     } else {
//       cb(new Error('Only image files are allowed!'), false);
//     }
//   }
// });

// // Add new product with file upload
// router.post('/products', auth, upload.single('bannerImage'), async (req, res) => {
//   try {
//     console.log('=== ADD PRODUCT ROUTE ===');
//     console.log('Request Body:', req.body);
//     console.log('Uploaded File:', req.file);

//     const { title, description, category, price, priceUnit } = req.body;

//     // Validation
//     if (!title || !description || !category || !price || !priceUnit) {
//       // If there's an uploaded file but validation fails, delete it
//       if (req.file) {
//         fs.unlinkSync(req.file.path);
//       }
//       return res.status(400).json({ 
//         message: 'All fields are required: title, description, category, price, priceUnit' 
//       });
//     }

//     // Handle banner image path
//     let bannerImagePath = '/Images/placeholder-property.jpg';
//     if (req.file) {
//       bannerImagePath = '/uploads/' + req.file.filename;
//     }

//     const product = new Product({
//       title,
//       description,
//       category,
//       price: parseFloat(price),
//       priceUnit,
//       bannerImage: bannerImagePath,
//       createdBy: req.user.userId
//     });

//     await product.save();
    
//     console.log('Product saved successfully:', product);
    
//     res.status(201).json({ 
//       success: true,
//       message: 'Product added successfully', 
//       product 
//     });
    
//   } catch (error) {
//     console.error('Error adding product:', error);
    
//     // Delete uploaded file if there was an error
//     if (req.file) {
//       fs.unlinkSync(req.file.path);
//     }
    
//     res.status(500).json({ message: 'Server error: ' + error.message });
//   }
// });

// // Serve static files from uploads directory
// router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// // Get all products
// // routes/adminRoutes.js - Update the GET route to remove auth
// router.get('/products', async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
    
//     // Ensure full URLs for images
//     const productsWithFullUrls = products.map(product => ({
//       ...product._doc,
//       bannerImage: product.bannerImage.startsWith('/uploads/') 
//         ? `http://localhost:8000${product.bannerImage}`
//         : product.bannerImage
//     }));
    
//     res.json({ 
//       success: true,
//       products: productsWithFullUrls 
//     });
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Delete product (with file cleanup)
// router.delete('/products/:id', auth, async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
    
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     // Delete associated image file
//     if (product.bannerImage && product.bannerImage.startsWith('/uploads/')) {
//       const imagePath = path.join(__dirname, '..', product.bannerImage);
//       if (fs.existsSync(imagePath)) {
//         fs.unlinkSync(imagePath);
//       }
//     }

//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ 
//       success: true,
//       message: 'Product deleted successfully' 
//     });
//   } catch (error) {
//     console.error('Error deleting product:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });


// // Update product
// router.put('/products/:id', auth, upload.single('bannerImage'), async (req, res) => {
//   try {
//     const { title, description, category, price, priceUnit } = req.body;
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     product.title = title;
//     product.description = description;
//     product.category = category;
//     product.price = price;
//     product.priceUnit = priceUnit;
//     product.updatedAt = new Date();

//     if (req.file) {
//       product.bannerImage = `/uploads/${req.file.filename}`;
//     }

//     await product.save();

//     res.json({
//       success: true,
//       message: 'Product updated successfully',
//       product
//     });
//   } catch (error) {
//     console.error('Error updating product:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;
