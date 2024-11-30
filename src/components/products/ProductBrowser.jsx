import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../../constants/productData/categories';
import { PRODUCT_SUBCATEGORIES } from '../../constants/productData/subcategories';
import { PRODUCTS } from '../../constants/productData/products';

const ProductBrowser = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setSelectedProduct(null);
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedProduct(null);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    if (selectedProduct) {
      setSelectedProduct(null);
    } else if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs */}
        {(selectedCategory || selectedSubcategory || selectedProduct) && (
          <button
            onClick={handleBack}
            className="mb-6 flex items-center text-gray-600 hover:text-primary"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        )}

        <AnimatePresence mode="wait">
          {/* Categories View */}
          {!selectedCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {PRODUCT_CATEGORIES.map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ y: -5 }}
                  onClick={() => handleCategorySelect(category)}
                  className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden"
                >
                  {/* Category Card Content */}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Subcategories View */}
          {selectedCategory && !selectedSubcategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {selectedCategory.subcategories.map((subcategoryId) => {
                const subcategory = PRODUCT_SUBCATEGORIES[subcategoryId];
                return (
                  <motion.div
                    key={subcategory.id}
                    whileHover={{ y: -5 }}
                    onClick={() => handleSubcategorySelect(subcategory)}
                    className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    {/* Subcategory Card Content */}
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Products View */}
          {selectedSubcategory && !selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {selectedSubcategory.products.map((productId) => {
                const product = PRODUCTS[productId];
                return (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -5 }}
                    onClick={() => handleProductSelect(product)}
                    className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    {/* Product Card Content */}
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Product Detail View */}
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Product Detail Content */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductBrowser; 