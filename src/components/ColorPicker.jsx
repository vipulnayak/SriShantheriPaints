import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ColorPicker = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [showPicker, setShowPicker] = useState(false);
  const [showHex, setShowHex] = useState(false);
  const [customHex, setCustomHex] = useState('');

  const colors = {
    'Basic Colors': [
      '#FFFFFF', '#000000', '#808080', '#C0C0C0',
      '#FF0000', '#00FF00', '#0000FF', '#FFFF00',
    ],
    'Pastel Colors': [
      '#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA',
      '#FFB3FF', '#B3FFB3', '#B3B3FF', '#FFDFBA',
    ],
    'Earth Tones': [
      '#8B4513', '#A0522D', '#6B4423', '#800000',
      '#8B7355', '#DAA520', '#CD853F', '#D2691E',
    ],
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setCustomHex(color);
    onColorChange?.(color);
  };

  const handleCustomHexChange = (e) => {
    const hex = e.target.value;
    setCustomHex(hex);
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      setSelectedColor(hex);
      onColorChange?.(hex);
    }
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.color-picker-container')) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    if (showPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPicker]);

  return (
    <div className="relative color-picker-container">
      {/* Color Preview Button */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setShowPicker(!showPicker)}
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div
            className="w-8 h-8 rounded-md border-2 border-gray-300 shadow-sm"
            style={{ backgroundColor: selectedColor }}
          />
          <span className="text-sm font-medium text-gray-700">
            {showHex ? selectedColor.toUpperCase() : 'Pick Color'}
          </span>
        </button>
        <button
          onClick={() => setShowHex(!showHex)}
          className="p-2 text-gray-500 hover:text-gray-700"
          title="Toggle hex code"
        >
          #
        </button>
      </div>

      {/* Color Picker Panel */}
      <AnimatePresence>
        {showPicker && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 mt-2 p-4 bg-white rounded-lg shadow-xl border border-gray-200 w-72"
          >
            {/* Custom Hex Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Custom Color
              </label>
              <input
                type="text"
                value={customHex}
                onChange={handleCustomHexChange}
                placeholder="#FFFFFF"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-primary focus:border-primary"
                pattern="^#[0-9A-Fa-f]{6}$"
              />
            </div>

            {/* Color Categories */}
            <div className="space-y-4">
              {Object.entries(colors).map(([category, colorList]) => (
                <div key={category}>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">{category}</h3>
                  <div className="grid grid-cols-8 gap-1">
                    {colorList.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleColorSelect(color)}
                        className={`w-6 h-6 rounded-md border-2 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                          selectedColor === color ? 'border-primary' : 'border-gray-200'
                        }`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Color Preview */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Selected Color</span>
                <div className="flex items-center space-x-2">
                  <div
                    className="w-8 h-8 rounded-md border-2 border-gray-300"
                    style={{ backgroundColor: selectedColor }}
                  />
                  <span className="text-sm font-mono">{selectedColor.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker; 