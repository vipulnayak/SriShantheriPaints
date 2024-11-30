import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div>
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage; 