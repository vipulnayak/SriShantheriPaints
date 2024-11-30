import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'interior',
    title: 'Interior Products',
    description: 'Premium quality paints for your interior walls and ceilings',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f',
    link: '/products/interior'
  },
  {
    id: 'exterior',
    title: 'Exterior Products',
    description: 'Weather-resistant paints for lasting exterior protection',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828',
    link: '/products/exterior'
  },
  {
    id: 'woodcare',
    title: 'Wood Care',
    description: 'Complete wood finishing solutions',
    image: 'https://images.unsplash.com/photo-1610501697424-ea4b53b8b134',
    link: '/products/woodcare'
  }
];

const ProductCategories = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Paint Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Your paint project starts here. Select the area you are painting to explore our recommended products.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <Link to={category.link} className="block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories; 