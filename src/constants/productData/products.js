export const PRODUCTS = {
  'premium-emulsion': {
    id: 'premium-emulsion',
    name: 'Premium Emulsion',
    description: 'Superior quality interior wall finish with excellent coverage',
    category: 'interior',
    subcategory: 'wall-paints',
    features: [
      'Excellent Coverage',
      'Washable',
      'Low VOC',
      'Smooth Finish',
      'Easy Application'
    ],
    finishTypes: ['Matt', 'Silk', 'Soft Sheen'],
    colors: ['#FFFFFF', '#F5F5F5', '#EEEEEE'],
    technicalDetails: {
      coverage: '120-140 sq.ft/ltr/coat',
      dryingTime: '2-3 hours',
      recoating: '4-6 hours',
      dilution: '40% with clean water'
    }
  },
  'luxury-silk': {
    id: 'luxury-silk',
    name: 'Luxury Silk Emulsion',
    description: 'Premium silk finish paint for luxurious interiors',
    category: 'interior',
    subcategory: 'wall-paints',
    features: [
      'Silk Finish',
      'Stain Resistant',
      'Superior Washability',
      'Rich Colors',
      'Durable'
    ],
    finishTypes: ['Silk'],
    colors: ['#FAFAFA', '#F0F0F0', '#E0E0E0'],
    technicalDetails: {
      coverage: '130-150 sq.ft/ltr/coat',
      dryingTime: '2-3 hours',
      recoating: '4-6 hours',
      dilution: '35% with clean water'
    }
  },
  // Add more products for each category...
}; 