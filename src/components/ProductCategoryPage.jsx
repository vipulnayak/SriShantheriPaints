import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../constants/productCategories';

const ProductCategoryPage = () => {
  const { categoryId } = useParams();
  const category = PRODUCT_CATEGORIES[categoryId];

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold text-white text-center"
          >
            {category.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-200 text-center max-w-3xl mx-auto"
          >
            {category.description}
          </motion.p>
        </div>
      </div>

      {/* Subcategories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {category.subcategories.map((subcategory, index) => (
          <motion.div
            key={subcategory.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              {subcategory.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {subcategory.products.map((product) => (
                <motion.div
                  key={product.name}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                >
                  {/* Product Image */}
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img
                      src={`/products/${categoryId}/${product.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/products/fallback.jpg';
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <svg
                            className="h-5 w-5 text-primary mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Finish Types if available */}
                    {product.finishTypes && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          Available Finishes
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.finishTypes.map((finish) => (
                            <span
                              key={finish}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {finish}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Call to Action */}
                    <div className="mt-6">
                      <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors duration-300">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryPage; 