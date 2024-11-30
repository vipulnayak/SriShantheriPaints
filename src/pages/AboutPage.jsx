import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            About Sri Shantheri Paints
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto"
          >
            Your trusted partner in premium quality paints and coatings
          </motion.p>
        </div>

        {/* Content Sections */}
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600">
              Since our establishment, Sri Shantheri Paints has been committed to providing 
              high-quality paint solutions. We've built our reputation on trust, quality, 
              and excellent customer service, serving both residential and commercial clients 
              throughout Karnataka.
            </p>
          </motion.div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold">Quality First</h3>
                  <p className="text-gray-600">We never compromise on the quality of our products</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold">Customer Satisfaction</h3>
                  <p className="text-gray-600">Your satisfaction is our top priority</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold">Innovation</h3>
                  <p className="text-gray-600">Constantly improving our products and services</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Guidance',
                description: 'Our team provides professional advice for all your painting needs'
              },
              {
                title: 'Premium Products',
                description: 'We offer only the highest quality paints and coatings'
              },
              {
                title: 'Reliable Service',
                description: 'Count on us for timely delivery and excellent support'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage; 