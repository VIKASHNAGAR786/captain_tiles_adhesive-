export interface Product {
  slug: string;
  name: string;
  number: string;
  image: string;
  description: string;
  grade: string;
  seoDescription: string;
  keywords: string;
}

export const PRODUCTS: Product[] = [
  { slug: 'captain-dura-bond', name: 'Dura Bond', number: '01', image: '/assets/images/products/type1.jpeg', description: 'Reliable tile adhesive for ceramic, vitrified and porcelain tile applications.', grade: 'Type 1', seoDescription: 'Captain Dura Bond tile adhesive for ceramic, vitrified and porcelain tiles on walls and floors. Made in India by Captain Tiles Adhesive.', keywords: 'Dura Bond tile adhesive, ceramic tile adhesive, vitrified tile adhesive' },
  { slug: 'captain-dura-grip', name: 'Dura Grip', number: '02', image: '/assets/images/products/type2.jpeg', description: 'Superior grip technology for confident wall and floor fixing.', grade: 'Type 1', seoDescription: 'Captain Dura Grip tile adhesive with strong grip technology for wall and floor tile applications in Rajasthan and India.', keywords: 'Dura Grip tile adhesive, wall tile adhesive, floor tile adhesive' },
  { slug: 'captain-dura-stick', name: 'Dura Stick', number: '03', image: '/assets/images/products/type3.jpeg', description: 'A strong, ready-to-use choice for everyday tile installation work.', grade: 'Type 1', seoDescription: 'Captain Dura Stick tile adhesive for dependable ceramic, vitrified and porcelain tile installation on walls and floors.', keywords: 'Dura Stick tile adhesive, porcelain tile adhesive, tile fixing adhesive' },
  { slug: 'captain-dura-shield', name: 'Dura Shield', number: '04', image: '/assets/images/products/type4.jpeg', description: 'A water-resistant adhesive for durable tile-to-surface bonding.', grade: 'Type 4', seoDescription: 'Captain Dura Shield water-resistant tile adhesive for durable wall and floor tile bonding, made in India.', keywords: 'Dura Shield tile adhesive, water resistant tile adhesive, Type 4 tile adhesive' },
];

export const PRODUCT_DESCRIPTION = 'CAPTAIN is a polymer-modified thin-set adhesive for fixing ceramic and vitrified tiles on horizontal and vertical surfaces in internal dry areas over cementitious substrates.';

export const PRODUCT_BENEFITS = [
  'Excellent Adhesion Strength', 'Suitable for Interior & Exterior Use', 'Water & Moisture Resistant',
  'High Bond Strength', 'Easy to Apply', 'Long-Lasting Performance', 'Suitable for Wall & Floor Applications',
];

export const PRODUCT_TYPES = ['Ceramic Tiles', 'Vitrified Tiles', 'Porcelain Tiles'];
export const PRODUCT_DIRECTIONS = ['Surface Preparation', 'Add Water to Powder', 'Mix to Uniform Consistency', 'Apply Using a Notched Trowel', 'Fix the Tiles Firmly', 'Allow to Set for 24 Hours'];
export const PRODUCT_PRECAUTIONS = ['Store in a cool and dry place.', 'Use clean water for mixing.', 'Do not add extra water once mixed.', 'Use within the pot life.'];
export const PRODUCT_SPECIFICATIONS = [
  ['Appearance', 'Grey/White Powder'], ['Bulk Density', '125-0.05 g/cc (as printed; verify)'], ['Water Requirement', '24%-26%'],
  ['Open Time', '25-30 Minutes'], ['Adjustability Time', '25 Minutes'], ['Pot Life', '2-3 Hours'], ['Final Setting Time', '24 Hours'], ['Coverage', '45 sq. ft. per 20 kg bag (approx.)'],
];