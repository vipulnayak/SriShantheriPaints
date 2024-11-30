import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_IMAGES } from '../../constants/productData/images';

const ProductGallery = ({ productId }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const product = PRODUCT_IMAGES.products[productId];

  if (!product) return null;

  const images = [product.main, ...product.gallery];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedImage}
            src={images[selectedImage]}
            alt={`Product view ${selectedImage + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
              selectedImage === index ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery; 