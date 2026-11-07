export const BUSINESS = {
  name: 'Arora Interiors',
  category: 'Interior Designer',
  tagline: 'Thoughtfully designed interiors for elegant, comfortable living.',
  address: 'Shop Plot, 63, Patparganj Rd, Block A, Pandav Nagar, New Delhi, Delhi 110092',
  phoneDisplay: '09711144495',
  phoneHref: 'tel:+919711144495',
  whatsappNumber: '919711144495',
  whatsappUrl: 'https://wa.me/919711144495',
  profileUrl: 'https://maps.app.goo.gl/z1JHnT7zDCDXdr1P6',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Shop+Plot+63+Patparganj+Rd+Block+A+Pandav+Nagar+New+Delhi+Delhi+110092&t=&z=16&ie=UTF8&iwloc=&output=embed',
} as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Enquire', href: '#enquiry' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SERVICES = [
  {
    id: 'complete-home',
    title: 'Complete Home Interior Design',
    description:
      'End-to-end interior planning for your home, from concept and layouts to materials, finishes and styling.',
    photoId: '7722168',
  },
  {
    id: 'living-room',
    title: 'Living Room Interiors',
    description: 'Inviting living spaces shaped around how you gather, relax and entertain.',
    photoId: '7045702',
  },
  {
    id: 'bedroom',
    title: 'Bedroom Design',
    description: 'Calm, restful bedrooms with considered lighting, storage and finishes.',
    photoId: '6434592',
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen Design',
    description: 'Functional, beautifully finished kitchens planned around your everyday routine.',
    photoId: '6508341',
  },
  {
    id: 'wardrobe',
    title: 'Wardrobe Design',
    description: 'Custom wardrobes with smart storage planning and refined finishes.',
    photoId: '6580380',
  },
  {
    id: 'false-ceiling',
    title: 'False Ceiling Design',
    description: 'Elegant ceilings with integrated lighting that define and elevate each room.',
    photoId: '37982071',
  },
  {
    id: 'office',
    title: 'Office Interior Design',
    description: 'Professional workspaces that balance productivity, comfort and brand character.',
    photoId: '36631701',
  },
  {
    id: 'space-planning',
    title: 'Space Planning and Styling',
    description: 'Smart layouts and curated styling that make the most of every square foot.',
    photoId: '7195873',
  },
] as const;

export const PORTFOLIO_CATEGORIES = [
  'Luxury Living Rooms',
  'Modern Bedrooms',
  'Contemporary Kitchens',
  'Elegant Dining Areas',
  'Modular Wardrobes',
  'Modern Office Spaces',
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export const PORTFOLIO_ITEMS: { id: string; title: string; category: PortfolioCategory; photoId: string }[] = [
  { id: 'lr-1', title: 'Sunlit Living Room', category: 'Luxury Living Rooms', photoId: '8141956' },
  { id: 'lr-2', title: 'Open-Plan Living', category: 'Luxury Living Rooms', photoId: '34688219' },
  { id: 'lr-3', title: 'Warm Neutral Lounge', category: 'Luxury Living Rooms', photoId: '6207822' },
  { id: 'br-1', title: 'Tranquil Bedroom', category: 'Modern Bedrooms', photoId: '6585757' },
  { id: 'br-2', title: 'Evening Suite', category: 'Modern Bedrooms', photoId: '39643628' },
  { id: 'br-3', title: 'Glass-Light Bedroom', category: 'Modern Bedrooms', photoId: '6207940' },
  { id: 'kt-1', title: 'Minimal Kitchen', category: 'Contemporary Kitchens', photoId: '8134772' },
  { id: 'kt-2', title: 'Timber-Accent Kitchen', category: 'Contemporary Kitchens', photoId: '6908565' },
  { id: 'kt-3', title: 'Marble Counter Kitchen', category: 'Contemporary Kitchens', photoId: '8089079' },
  { id: 'dr-1', title: 'Marble & Gold Dining', category: 'Elegant Dining Areas', photoId: '14598479' },
  { id: 'dr-2', title: 'Classic Dining Room', category: 'Elegant Dining Areas', photoId: '5998031' },
  { id: 'dr-3', title: 'Candlelit Dining', category: 'Elegant Dining Areas', photoId: '24461264' },
  { id: 'wd-1', title: 'Walk-in Wardrobe', category: 'Modular Wardrobes', photoId: '6580395' },
  { id: 'wd-2', title: 'Open Shelving Wardrobe', category: 'Modular Wardrobes', photoId: '11701120' },
  { id: 'wd-3', title: 'Wood-Finish Wardrobe', category: 'Modular Wardrobes', photoId: '7061419' },
  { id: 'of-1', title: 'Open Workspace', category: 'Modern Office Spaces', photoId: '6794970' },
  { id: 'of-2', title: 'Boardroom Lounge', category: 'Modern Office Spaces', photoId: '7511754' },
  { id: 'of-3', title: 'Creative Studio Desk', category: 'Modern Office Spaces', photoId: '1034650' },
];
