import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1572969176403-0d6e50b9ee5a';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleImageError = (e) => {
    e.target.src = FALLBACK_IMAGE;
    e.target.onerror = null;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const products = useMemo(() => [
    // Interior Products
    {
      id: 1,
      name: 'Premium Emulsion',
      description: 'Superior quality interior wall finish with excellent coverage',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f',
      features: ['Excellent Coverage', 'Washable', 'Low VOC'],
      colors: ['#FFFFFF', '#F5F5F5', '#EEEEEE'],
    },
    {
      id: 2,
      name: 'Luxury Silk',
      description: 'Premium silk finish paint for luxurious interiors',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265',
      features: ['Silk Finish', 'Stain Resistant', 'Rich Colors'],
      colors: ['#FAFAFA', '#E0E0E0', '#BDBDBD'],
    },
    {
      id: 3,
      name: 'Designer Emulsion',
      description: 'Premium interior paint with designer finish',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91',
      features: ['Designer Finish', 'Unique Patterns', 'Premium Quality'],
      colors: ['#F0F0F0', '#E8E8E8', '#D3D3D3'],
    },
    
    // Exterior Products
    {
      id: 4,
      name: 'WeatherCoat All Guard',
      description: 'Advanced weather protection system for exterior walls',
      category: 'Exterior',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828',
      features: ['Weather Resistant', 'UV Protection', 'Anti-Algal'],
      colors: ['#FFFFFF', '#F0F0F0', '#E5E5E5'],
    },
    {
      id: 5,
      name: 'Texture Coat',
      description: 'Textured exterior finish for unique appearance',
      category: 'Exterior',
      image: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91',
      features: ['Durable', 'Decorative', 'Weather Protection'],
      colors: ['#D3D3D3', '#C0C0C0', '#A9A9A9'],
    },
    {
      id: 6,
      name: 'Exterior Primer',
      description: 'High-quality exterior wall primer',
      category: 'Exterior',
      image: 'https://images.unsplash.com/photo-1596973668235-5c5e5585f223',
      features: ['Strong Adhesion', 'Weather Resistant', 'Alkali Resistant'],
      colors: ['#FFFFFF', '#FAFAFA', '#F5F5F5'],
    },
    
    // Wood Products
    {
      id: 7,
      name: 'Wood Stain',
      description: 'Premium wood stain for natural wood finish',
      category: 'Wood',
      image: 'https://images.unsplash.com/photo-1610501697424-ea4b53b8b134',
      features: ['Deep Penetration', 'Natural Look', 'Water Resistant'],
      colors: ['#8B4513', '#A0522D', '#6B4423'],
    },
    {
      id: 8,
      name: 'Wood Sealer',
      description: 'Protective clear coat for wood surfaces',
      category: 'Wood',
      image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e',
      features: ['UV Protection', 'Clear Finish', 'Long Lasting'],
      colors: ['#DEB887', '#D2691E', '#8B4513'],
    },
    {
      id: 9,
      name: 'Wood Varnish',
      description: 'Premium wood varnish for lasting protection',
      category: 'Wood',
      image: 'https://images.unsplash.com/photo-1566907225472-f2c8329fa49a',
      features: ['High Gloss', 'Scratch Resistant', 'Quick Drying'],
      colors: ['#CD853F', '#8B4513', '#A0522D'],
    }
  ], []);

  const categories = ['All', 'Interior', 'Exterior', 'Wood'];

  useEffect(() => {
    setFilteredProducts(
      activeCategory === 'All'
        ? products
        : products.filter(product => product.category === activeCategory)
    );
  }, [activeCategory, products]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Animated Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="relative text-center mb-8 sm:mb-16"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full filter blur-3xl"
            />
          </div>
          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            Our Premium Collection
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 sm:w-24 h-1 bg-accent mx-auto rounded-full mb-6 sm:mb-8"
          />
        </motion.div>

        {/* Animated Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="inline-flex rounded-lg bg-gray-100 p-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white text-primary shadow-md'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid with Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                variants={productVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform-gpu"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-2 mb-4"
                      >
                        {product.colors.map((color, index) => (
                          <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1.2 }}
                            className="w-6 h-6 rounded-full border-2 border-white"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start justify-between mb-2"
                  >
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {product.category}
                    </span>
                  </motion.div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Products; 