const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['COMMERCIAL PROPERTY', 'RESIDENTIAL PROPERTY', 'PLOT', 'AGRICULTURAL LAND']
  },
  price: {
    type: Number,
    required: true
  },
  priceUnit: {
    type: String,
    required: true,
    enum: ['CR', 'Lacs', 'INR']
  },
  bannerImage: {
    type: String
  },
  images: [{
    type: String
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);