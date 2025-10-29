// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('add');
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
  
//   // Check authentication on component mount
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem('user') || 'null');
//     const userToken = localStorage.getItem('token') || '';
    
//     setUser(userData);
//     setToken(userToken);

//     // Debug logs
//     console.log('User from localStorage:', userData);
//     console.log('Token from localStorage:', userToken);

//     if (!userData || userData.userType !== 'admin') {
//       navigate('/login');
//       return;
//     }

//     if (activeTab === 'manage') {
//       fetchProducts();
//     }
//   }, [activeTab, navigate]);

//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
      
//       if (!token) {
//         alert('No authentication token found. Please login again.');
//         navigate('/login');
//         return;
//       }

//       const response = await fetch('http://localhost:8000/api/admin/products', {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
      
//       console.log('Fetch Products Response Status:', response.status);

//       if (response.status === 401) {
//         alert('Session expired. Please login again.');
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//         navigate('/login');
//         return;
//       }

//       const data = await response.json();
//       console.log('Products Data:', data);

//       if (response.ok) {
//         setProducts(data.products || []);
//       } else {
//         alert(data.message || 'Error fetching products');
//       }
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       alert('Error fetching products');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   const [productData, setProductData] = useState({
//     title: '',
//     description: '',
//     category: 'COMMERCIAL PROPERTY',
//     price: '',
//     priceUnit: 'CR',
//     bannerImage: null
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProductData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleBannerImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProductData(prev => ({
//         ...prev,
//         bannerImage: file
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);

//   try {
//     if (!token) {
//       alert('No authentication token found. Please login again.');
//       navigate('/login');
//       return;
//     }

//     // Use JSON instead of FormData since file upload is disabled
//     const productJson = {
//       title: productData.title,
//       description: productData.description,
//       category: productData.category,
//       price: productData.price,
//       priceUnit: productData.priceUnit
//     };

//     console.log('Submitting product data (JSON):', productJson);

//     const response = await fetch('http://localhost:8000/api/admin/products', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json' // Important: Use JSON content type
//       },
//       body: JSON.stringify(productJson)
//     });

//     console.log('Add Product Response Status:', response.status);

//     if (response.status === 401) {
//       alert('Session expired. Please login again.');
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       navigate('/login');
//       return;
//     }

//     const result = await response.json();
//     console.log('Add Product Response:', result);

//     if (response.ok) {
//       alert('Product added successfully!');
//       setProductData({
//         title: '',
//         description: '',
//         category: 'COMMERCIAL PROPERTY',
//         price: '',
//         priceUnit: 'CR',
//         bannerImage: null
//       });
//       setActiveTab('manage');
//     } else {
//       alert(result.message || 'Error adding product');
//     }
//   } catch (error) {
//     console.error('Error adding product:', error);
//     alert('Error adding product. Check console for details.');
//   } finally {
//     setLoading(false);
//   }
// };

//   const deleteProduct = async (productId) => {
//     if (window.confirm('Are you sure you want to delete this product?')) {
//       try {
//         const response = await fetch(`http://localhost:8000/api/admin/products/${productId}`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });

//         if (response.ok) {
//           alert('Product deleted successfully!');
//           fetchProducts();
//         } else {
//           const result = await response.json();
//           alert(result.message || 'Error deleting product');
//         }
//       } catch (error) {
//         console.error('Error deleting product:', error);
//         alert('Error deleting product');
//       }
//     }
//   };

//   if (!user || user.userType !== 'admin') {
//     return (
//       <div className="access-denied">
//         <h2>Access Denied</h2>
//         <p>You need to be logged in as admin to access this page.</p>
//         <button onClick={() => navigate('/login')}>Go to Login</button>
//       </div>
//     );
//   }

//   return (
//     <div className="admin-dashboard">
//       <header className="dashboard-header">
//         <div className="header-content">
//           <div className="header-left">
//             <img src="/Images/infinity_logo.png" alt="Logo" width="50" />
//             <h1>Admin Dashboard</h1>
//           </div>
//           <div className="header-right">
//             <span className="welcome-text">Welcome, {user.name || user.email}</span>
//             <button onClick={handleLogout} className="logout-btn">Logout</button>
//           </div>
//         </div>
//       </header>

//       <nav className="dashboard-nav">
//         <button 
//           className={`nav-tab ${activeTab === 'add' ? 'active' : ''}`}
//           onClick={() => setActiveTab('add')}
//         >
//           Add Product
//         </button>
//         <button 
//           className={`nav-tab ${activeTab === 'manage' ? 'active' : ''}`}
//           onClick={() => setActiveTab('manage')}
//         >
//           Manage Products
//         </button>
//       </nav>

//       <main className="dashboard-main">
//         {activeTab === 'add' ? (
//           <div className="add-product-section">
//             <h2>Add New Property</h2>
//             <form onSubmit={handleSubmit} className="product-form">
              
//               {/* Banner Image Upload - ONLY THIS FIELD */}
//               <div className="form-section">
//                 <h3>Banner Image</h3>
//                 <div className="file-upload-group">
//                   <label htmlFor="bannerImage" className="file-upload-label">
//                     <span>Upload Banner Image</span>
//                     <input 
//                       type="file" 
//                       id="bannerImage"
//                       accept="image/*"
//                       onChange={handleBannerImageChange}
//                     />
//                   </label>
//                   {productData.bannerImage && (
//                     <span className="file-name">{productData.bannerImage.name}</span>
//                   )}
//                 </div>
//               </div>

//               {/* Property Details */}
//               <div className="form-section">
//                 <h3>Property Details</h3>
                
//                 <div className="form-group">
//                   <label htmlFor="title">Title *</label>
//                   <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     value={productData.title}
//                     onChange={handleInputChange}
//                     placeholder="Enter property title"
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="description">Description *</label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     value={productData.description}
//                     onChange={handleInputChange}
//                     placeholder="Enter property description"
//                     rows="4"
//                     required
//                   />
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="category">Category *</label>
//                     <select
//                       id="category"
//                       name="category"
//                       value={productData.category}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="COMMERCIAL PROPERTY">COMMERCIAL PROPERTY</option>
//                       <option value="RESIDENTIAL PROPERTY">RESIDENTIAL PROPERTY</option>
//                       <option value="PLOT">PLOT</option>
//                       <option value="AGRICULTURAL LAND">AGRICULTURAL LAND</option>
//                     </select>
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="price">Price *</label>
//                     <div className="price-input-group">
//                       <input
//                         type="number"
//                         id="price"
//                         name="price"
//                         value={productData.price}
//                         onChange={handleInputChange}
//                         placeholder="Enter amount"
//                         required
//                       />
//                       <select
//                         name="priceUnit"
//                         value={productData.priceUnit}
//                         onChange={handleInputChange}
//                         required
//                       >
//                         <option value="CR">CR</option>
//                         <option value="Lacs">Lacs</option>
//                         <option value="INR">INR</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <button type="submit" className="submit-btn" disabled={loading}>
//                 {loading ? 'Adding Property...' : 'Add Property'}
//               </button>
//             </form>
//           </div>
//         ) : (
//           <div className="manage-products-section">
//             <h2>Manage Properties</h2>
            
//             {loading ? (
//               <div className="loading-spinner">Loading...</div>
//             ) : products.length === 0 ? (
//               <div className="no-products">
//                 <p>No properties found. Add your first property!</p>
//               </div>
//             ) : (
//               <div className="products-grid">
//                 {products.map((product) => (
//                   <div key={product._id} className="product-card">
//                     <div className="product-image">
//                       <img 
//                         src={`http://localhost:8000${product.bannerImage}`} 
//                         alt={product.title}
//                         onError={(e) => {
//                           e.target.src = '/Images/placeholder-property.jpg';
//                         }}
//                       />
//                     </div>
//                     <div className="product-details">
//                       <h3>{product.title}</h3>
//                       <p className="product-category">{product.category}</p>
//                       <p className="product-price">
//                         {product.price} {product.priceUnit}
//                       </p>
//                       <p className="product-description">
//                         {product.description.length > 100 
//                           ? `${product.description.substring(0, 100)}...` 
//                           : product.description
//                         }
//                       </p>
//                       <div className="product-actions">
//                         <button 
//                           className="delete-btn"
//                           onClick={() => deleteProduct(product._id)}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;










// 27-09-25
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('add');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user') || 'null');
    const userToken = localStorage.getItem('token') || '';
    
    setUser(userData);
    setToken(userToken);

    if (!userData || userData.userType !== 'admin') {
      navigate('/login');
      return;
    }

    if (activeTab === 'manage') {
      fetchProducts();
    }
  }, [activeTab, navigate]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      
      if (!token) {
        alert('No authentication token found. Please login again.');
        navigate('/login');
        return;
      }

      const response = await fetch('https://infinity-gnua.onrender.com/api/admin/products', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.status === 401) {
        alert('Session expired. Please login again.');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
        return;
      }

      const data = await response.json();
      console.log('Products Data:', data);

      if (response.ok) {
        setProducts(data.products || []);
      } else {
        alert(data.message || 'Error fetching products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('Error fetching products');
    } finally {
      setLoading(false);
    }
  };

  const [productData, setProductData] = useState({
    title: '',
    description: '',
    category: 'COMMERCIAL PROPERTY',
    price: '',
    priceUnit: 'CR',
    bannerImage: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBannerImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      
      setProductData(prev => ({
        ...prev,
        bannerImage: file
      }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    if (!token) {
      alert('No authentication token found. Please login again.');
      navigate('/login');
      return;
    }

    const formData = new FormData();
    formData.append('title', productData.title);
    formData.append('description', productData.description);
    formData.append('category', productData.category);
    formData.append('price', productData.price);
    formData.append('priceUnit', productData.priceUnit);

    if (productData.bannerImage) {
      formData.append('bannerImage', productData.bannerImage);
    }

    // 👉 Decide URL and method
    let url = 'https://infinity-gnua.onrender.com/api/admin/products';
    let method = 'POST';

    if (editingProductId) {
      url = `https://infinity-gnua.onrender.com/api/admin/products/${editingProductId}`;
      method = 'PUT';
    }

    const response = await fetch(url, {
      method,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    const result = await response.json();

    if (response.ok) {
      alert(editingProductId ? 'Product updated successfully!' : 'Product added successfully!');
      
      // Reset form
      setProductData({
        title: '',
        description: '',
        category: 'COMMERCIAL PROPERTY',
        price: '',
        priceUnit: 'CR',
        bannerImage: null
      });
      setEditingProductId(null); // reset karo
      document.getElementById('bannerImage').value = '';
      setActiveTab('manage');
      fetchProducts();
    } else {
      alert(result.message || 'Error saving product');
    }
  } catch (error) {
    console.error('Error saving product:', error);
    alert('Error saving product. Check console for details.');
  } finally {
    setLoading(false);
  }
};


  // Edit Product Function
  const editProduct = (product) => {
  setProductData({
    title: product.title,
    description: product.description,
    category: product.category,
    price: product.price.toString(),
    priceUnit: product.priceUnit,
    bannerImage: null
  });
  setEditingProductId(product._id);   // yaha product id set karo
  setActiveTab('add');
  window.scrollTo(0, 0);
//   alert(`Editing: ${product.title}. Modify the details and click "Update Property".`);
};

  const deleteProduct = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`https://infinity-gnua.onrender.com/api/admin/products/${productId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          alert('Product deleted successfully!');
          fetchProducts();
        } else {
          const result = await response.json();
          alert(result.message || 'Error deleting product');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Error deleting product');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user || user.userType !== 'admin') {
    return (
      <div className="access-denied">
        <h2>Access Denied</h2>
        <p>You need to be logged in as admin to access this page.</p>
        <button onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <img src="/Images/infinity_logo.png" alt="Logo" width="50" />
            <h1>Admin Dashboard</h1>
          </div>
          <div className="header-right">
            <span className="welcome-text">Welcome, {user.name || user.email}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <nav className="dashboard-nav">
        <button 
          className={`nav-tab ${activeTab === 'add' ? 'active' : ''}`}
          onClick={() => setActiveTab('add')}
        >
          {editingProductId ? 'Update Product' : 'Add Product'}
          {/* {productData.title ? 'Update Product' : 'Add Product'} */}
        </button>
        <button 
          className={`nav-tab ${activeTab === 'manage' ? 'active' : ''}`}
          onClick={() => setActiveTab('manage')}
        >
          Manage Products
        </button>
      </nav>

      <main className="dashboard-main">
        {activeTab === 'add' ? (
          <div className="add-product-section">
            <h2>{editingProductId ? 'Update Property' : 'Add New Property'}</h2>
            {/* <h2>{productData.title ? 'Update Property' : 'Add New Property'}</h2> */}
            <form onSubmit={handleSubmit} className="product-form" encType="multipart/form-data">
              
              {/* Banner Image Upload */}
              <div className="form-section">
                <h3>Banner Image</h3>
                <div className="file-upload-group">
                  <label htmlFor="bannerImage" className="file-upload-label">
                    <span>Upload Banner Image (Max 5MB)</span>
                    <input 
                      type="file" 
                      id="bannerImage"
                      accept="image/*"
                      onChange={handleBannerImageChange}
                    />
                  </label>
                  {productData.bannerImage && (
                    <div className="file-preview">
                      <span className="file-name">{productData.bannerImage.name}</span>
                      <span className="file-size">
                        ({(productData.bannerImage.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Property Details */}
              <div className="form-section">
                <h3>Property Details</h3>
                
                <div className="form-group">
                  <label htmlFor="title">Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={productData.title}
                    onChange={handleInputChange}
                    placeholder="Enter property title"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description *</label>
                  <textarea
                    id="description"
                    name="description"
                    value={productData.description}
                    onChange={handleInputChange}
                    placeholder="Enter property description"
                    rows="4"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="category">Category *</label>
                    <select
                      id="category"
                      name="category"
                      value={productData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="COMMERCIAL PROPERTY">COMMERCIAL PROPERTY</option>
                      <option value="RESIDENTIAL PROPERTY">RESIDENTIAL PROPERTY</option>
                      {/* <option value="PLOT">PLOT</option>
                      <option value="AGRICULTURAL LAND">AGRICULTURAL LAND</option> */}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="price">Price *</label>
                    <div className="price-input-group">
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={productData.price}
                        onChange={handleInputChange}
                        placeholder="Enter amount"
                        required
                      />
                      <select
                        name="priceUnit"
                        value={productData.priceUnit}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="CR">CR</option>
                        <option value="Lacs">Lacs</option>
                        <option value="INR">INR</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Uploading...' : (productData.title ? 'Update Property' : 'Add Property')}
              </button>
              
              {editingProductId && (
  <button 
    type="button" 
    className="cancel-btn"
    onClick={() => {
      setEditingProductId(null); // <-- Yeh important hai
      setProductData({
        title: '',
        description: '',
        category: 'COMMERCIAL PROPERTY',
        price: '',
        priceUnit: 'CR',
        bannerImage: null
      });
      document.getElementById('bannerImage').value = '';
    }}
  >
    Cancel Edit
  </button>
)}
              {/* {productData.title && (
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => {
                    setProductData({
                      title: '',
                      description: '',
                      category: 'COMMERCIAL PROPERTY',
                      price: '',
                      priceUnit: 'CR',
                      bannerImage: null
                    });
                    document.getElementById('bannerImage').value = '';
                  }}
                >
                  Cancel Edit
                </button>
              )} */}
            </form>
          </div>
        ) : (
          <div className="manage-products-section">
            <div className="section-header">
              <h2>Manage Properties</h2>
              <p>Total Properties: {products.length}</p>
            </div>
            
            {loading ? (
              <div className="loading-spinner">Loading...</div>
            ) : products.length === 0 ? (
              <div className="no-products">
                <p>No properties found. Add your first property!</p>
              </div>
            ) : (
              <div className="products-grid">
                {products.map((product) => (
                  <div key={product._id} className="product-card">
                    <div className="product-image">
                      <img 
                        src={product.bannerImage} 
                        alt={product.title}
                        onError={(e) => {
                          e.target.src = '/Images/placeholder-property.jpg';
                        }}
                      />
                      <div className="image-overlay">
                        <span className="category-badge">{product.category}</span>
                      </div>
                    </div>
                    <div className="product-details">
                      <h3>{product.title}</h3>
                      <p className="product-price">
                        ₹{product.price} {product.priceUnit}
                      </p>
                      <p className="product-description">
                        {product.description.length > 100 
                          ? `${product.description.substring(0, 100)}...` 
                          : product.description
                        }
                      </p>
                      <div className="product-meta">
                        <span className="created-date">
                          Added: {new Date(product.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="product-actions">
                        <button 
                          className="edit-btn"
                          onClick={() => editProduct(product)}
                        >
                          Edit
                        </button>
                        <button 
                          className="delete-btn"
                          onClick={() => deleteProduct(product._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
