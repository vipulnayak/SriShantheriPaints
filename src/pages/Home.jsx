import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import Contact from '../components/Contact';
import ColorVisualizer from '../components/ColorVisualizer';

const Home = () => {
  return (
    <>
      <Hero />
      <ColorVisualizer />
      <Products />
      <Services />
      <Contact />
    </>
  );
};

export default Home; 