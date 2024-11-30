import { useState } from 'react';
import ColorPicker from './ColorPicker';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants/images';

const ColorVisualizer = () => {
  const [selectedRoom, setSelectedRoom] = useState('living');
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');

  const rooms = [
    { id: 'living', name: 'Living Room', image: IMAGES.rooms.living },
    { id: 'bedroom', name: 'Bedroom', image: IMAGES.rooms.bedroom },
    { id: 'kitchen', name: 'Kitchen', image: IMAGES.rooms.kitchen },
    { id: 'bathroom', name: 'Bathroom', image: IMAGES.rooms.bathroom },
  ];

  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4"
          >
            Color Visualizer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
          >
            Explore our wide range of colors and visualize how they&apos;ll look in your space
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Room Preview */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            <div className="relative aspect-[4/3] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <img
                src={rooms.find(room => room.id === selectedRoom)?.image}
                alt={`${selectedRoom} preview`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 transition-colors duration-300"
                style={{ backgroundColor: selectedColor, mixBlendMode: 'multiply' }}
              />
            </div>

            {/* Room Selection - Scrollable on mobile */}
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex gap-2 sm:gap-4 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center pb-2">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room.id)}
                    className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                      selectedRoom === room.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {room.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Color Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Choose Your Color</h3>
              <ColorPicker onColorChange={setSelectedColor} />
              
              <div className="mt-4 sm:mt-6 space-y-4">
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Color</h4>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg shadow-inner"
                      style={{ backgroundColor: selectedColor }}
                    />
                    <span className="font-mono text-sm">{selectedColor.toUpperCase()}</span>
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-2.5 sm:py-3 px-4 rounded-lg hover:bg-secondary transition-colors duration-300 text-sm sm:text-base font-medium">
                  Get This Color
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorVisualizer; 