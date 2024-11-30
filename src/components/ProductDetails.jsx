import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);

  // Mock data - replace with your actual product data
  const product = {
    id: 1,
    name: 'Weathercoat All Guard',
    description: 'Premium exterior emulsion with advanced weather protection',
    category: 'Exterior Paints',
    image: '/products/exterior-allguard.jpg',
    features: [
      'Advanced weather protection',
      'Anti-algal properties',
      'UV resistance',
      'Water repellent',
      '7 years warranty',
    ],
    colors: [
      { name: 'Arctic White', code: '#FFFFFF' },
      { name: 'Moonlight', code: '#F0F0F0' },
      { name: 'Sandy Beach', code: '#F4D03F' },
      { name: 'Ocean Blue', code: '#2E86C1' },
      { name: 'Forest Green', code: '#196F3D' },
    ],
    specifications: {
      coverage: '120-130 sq.ft/ltr/coat',
      dryingTime: '2-3 hours',
      recoating: '4-6 hours',
      finish: 'Smooth and Matt',
      dilution: '40-45% by volume with clean water',
    },
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
            {selectedColor && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">Selected Color:</p>
                <div className="flex items-center mt-2">
                  <div
                    className="h-8 w-8 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: selectedColor.code }}
                  />
                  <span className="ml-2 text-gray-700">{selectedColor.name}</span>
                </div>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-lg text-gray-500">{product.description}</p>

            {/* Features */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">Key Features</h2>
              <ul className="mt-4 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-primary"
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
                    <span className="ml-2 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Selection */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">Available Colors</h2>
              <div className="mt-4 grid grid-cols-5 gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color.code}
                    onClick={() => setSelectedColor(color)}
                    className={`relative h-12 w-12 rounded-full focus:outline-none ring-2 ring-offset-2 ${
                      selectedColor?.code === color.code
                        ? 'ring-primary'
                        : 'ring-transparent'
                    }`}
                  >
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: color.code }}
                    />
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">Specifications</h2>
              <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <dt className="text-sm font-medium text-gray-500">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Contact Button */}
            <div className="mt-8">
              <a
                href="/contact"
                className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-secondary transition-colors duration-300 inline-block text-center"
              >
                Contact for Price
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 