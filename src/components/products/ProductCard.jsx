import { motion } from 'framer-motion';
import { PRODUCT_IMAGES } from '../../constants/productData/images';

export const ProductCard = ({ product, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden group"
    >
      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={PRODUCT_IMAGES.products[product.id]?.main || PRODUCT_IMAGES.fallback}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        {/* Features */}
        <div className="space-y-2">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <svg
                className="h-5 w-5 text-primary mr-2 flex-shrink-0"
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
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* View Details Button */}
        <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors duration-300">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export const CategoryCard = ({ category, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden group"
    >
      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={PRODUCT_IMAGES.categories[category.id] || PRODUCT_IMAGES.fallback}
          alt={category.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
          <p className="text-gray-200 text-sm">{category.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const SubcategoryCard = ({ subcategory, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden group"
    >
      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={PRODUCT_IMAGES.subcategories[subcategory.id] || PRODUCT_IMAGES.fallback}
          alt={subcategory.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{subcategory.title}</h3>
          <p className="text-gray-200 text-sm">{subcategory.description}</p>
        </div>
      </div>
    </motion.div>
  );
}; 