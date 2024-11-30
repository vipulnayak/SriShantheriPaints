import Products from '../components/Products';

const ProductsPage = () => {
  return (
    <div>
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default ProductsPage; 