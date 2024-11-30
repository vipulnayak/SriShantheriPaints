export const PRODUCT_CATEGORIES = {
  interior: {
    name: 'Interior Paints',
    description: 'Transform your indoor spaces',
    subcategories: [
      {
        name: 'Wall Paints',
        products: [
          {
            name: 'Premium Emulsion',
            description: 'Superior quality interior wall finish',
            features: ['Washable', 'Low VOC', 'Excellent Coverage'],
            finishTypes: ['Matt', 'Silk', 'Soft Sheen']
          },
          {
            name: 'Designer Finish',
            description: 'Special effects and textured finishes',
            features: ['Unique Patterns', 'Metallic Effects', 'Custom Textures']
          }
        ]
      },
      {
        name: 'Ceiling Paints',
        products: [
          {
            name: 'Ceiling White',
            description: 'Specially formulated for ceilings',
            features: ['Non-drip', 'Extra Matt', 'High Coverage']
          }
        ]
      }
    ]
  },
  exterior: {
    name: 'Exterior Paints',
    description: 'Weather-resistant protection',
    subcategories: [
      {
        name: 'Wall Finishes',
        products: [
          {
            name: 'WeatherCoat',
            description: 'Advanced weather protection system',
            features: ['Weather Resistant', 'UV Protection', 'Anti-Algal']
          },
          {
            name: 'Texture Coat',
            description: 'Textured exterior finish',
            features: ['Durable', 'Decorative', 'Weather Protection']
          }
        ]
      }
    ]
  },
  woodcare: {
    name: 'Wood Care',
    description: 'Complete wood protection solutions',
    subcategories: [
      {
        name: 'Interior Wood',
        products: [
          {
            name: 'Wood Stain',
            description: 'Penetrating wood stain',
            features: ['Natural Look', 'Deep Penetration', 'Even Finish']
          },
          {
            name: 'Clear Varnish',
            description: 'Protective clear coat',
            features: ['UV Protection', 'Water Resistant', 'Non-Yellowing']
          }
        ]
      },
      {
        name: 'Exterior Wood',
        products: [
          {
            name: 'Exterior Wood Finish',
            description: 'Weather-resistant wood protection',
            features: ['Weather Protection', 'UV Resistant', 'Anti-Fungal']
          }
        ]
      }
    ]
  },
  metalcare: {
    name: 'Metal Care',
    description: 'Metal protection solutions',
    subcategories: [
      {
        name: 'Metal Paints',
        products: [
          {
            name: 'Anti-Rust Primer',
            description: 'Rust prevention primer',
            features: ['Rust Prevention', 'Strong Adhesion', 'Quick Drying']
          },
          {
            name: 'Metal Topcoat',
            description: 'Decorative metal finish',
            features: ['Durable', 'Weather Resistant', 'Multiple Colors']
          }
        ]
      }
    ]
  },
  waterproofing: {
    name: 'Waterproofing',
    description: 'Complete waterproofing solutions',
    subcategories: [
      {
        name: 'Roof Coating',
        products: [
          {
            name: 'Roof Guard',
            description: 'Advanced roof waterproofing',
            features: ['Waterproof', 'Heat Reflective', 'Crack Bridging']
          }
        ]
      },
      {
        name: 'Wall Treatment',
        products: [
          {
            name: 'Wall Shield',
            description: 'External wall waterproofing',
            features: ['Water Repellent', 'Breathable', 'Long Lasting']
          }
        ]
      }
    ]
  },
  primers: {
    name: 'Primers & Undercoats',
    description: 'Surface preparation products',
    subcategories: [
      {
        name: 'Wall Primers',
        products: [
          {
            name: 'Interior Primer',
            description: 'Interior wall preparation',
            features: ['Good Coverage', 'Strong Adhesion', 'Quick Drying']
          },
          {
            name: 'Exterior Primer',
            description: 'Exterior wall preparation',
            features: ['Weather Resistant', 'Alkali Resistant', 'Water Resistant']
          }
        ]
      }
    ]
  }
}; 