import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>Sri Shantheri Paints - Premium Quality Paints</title>
        <meta name="description" content="Sri Shantheri Paints - Your trusted partner for premium quality paints and coating solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex-grow overflow-x-hidden"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

export default Layout; 