export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: 'hero' | 'lookbook' | 'actor' | 'model' | 'profile';
  orientation: 'portrait' | 'landscape' | 'fullbody';
  title: string;
  subtitle: string;
  caption: string;
  section: string;
  aspectRatio?: string;
}

export const HERO_IMAGE: PortfolioImage = {
  id: 'hero-primary',
  src: '/images/hero-trenchcoat-skyline.jpg',
  alt: 'Hrishabh Gupta wearing camel trench coat with city skyline and waterfront bokeh',
  category: 'hero',
  orientation: 'portrait',
  title: 'Urban Editorial',
  subtitle: 'Presence & Stance',
  caption: 'Hrishabh Gupta in editorial camel coat overlooking city waterfront skyline',
  section: 'hero',
};

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  HERO_IMAGE,
  {
    id: 'rooftop-cityscape',
    src: '/images/hero-cityscape-suit.png',
    alt: 'Hrishabh Gupta in tailored blazer on rooftop at golden hour city skyline',
    category: 'profile',
    orientation: 'portrait',
    title: 'Golden Hour Lead',
    subtitle: 'Sophisticated Protagonist',
    caption: 'Cinematic rooftop portrait with urban skyline backdrop',
    section: 'casting',
  },
  {
    id: 'cruiser-bike-night',
    src: '/images/cruiser-bike-night.jpg',
    alt: 'Hrishabh Gupta seated on a black cruiser motorcycle at night',
    category: 'model',
    orientation: 'landscape',
    title: 'Cruiser Attitude',
    subtitle: 'Action & Rugged Style',
    caption: 'Night motorcycle posture highlighting relaxed confidence',
    section: 'modeling',
  },
  {
    id: 'ethnic-kurta-waterfall',
    src: '/images/ethnic-kurta-waterfall.jpg',
    alt: 'Hrishabh Gupta wearing navy blue traditional kurta seated on floating bed in water forest',
    category: 'lookbook',
    orientation: 'portrait',
    title: 'Royal Ethnic Couture',
    subtitle: 'Indian Traditional Elegance',
    caption: 'Navy embroidered kurta amidst silver trees and water reflection',
    section: 'lookbook',
  },
  {
    id: 'beach-linen-lifestyle',
    src: '/images/beach-linen-lifestyle.jpg',
    alt: 'Hrishabh Gupta in off-white linen shirt and white pants on tropical beach',
    category: 'model',
    orientation: 'portrait',
    title: 'Resortwear Luxury',
    subtitle: 'High Fashion Coastal',
    caption: 'Sunlit coastal portrait with tropical ocean backdrop',
    section: 'modeling',
  },
  {
    id: 'fullbody-chandelier',
    src: '/images/fullbody-chandelier.jpeg',
    alt: 'Full body photograph of Hrishabh Gupta in brown jacket standing confident under a chandelier',
    category: 'model',
    orientation: 'fullbody',
    title: 'Stance & Stature',
    subtitle: "6'1\" Frame & Presence",
    caption: 'Dramatic full-body shot showcasing 6\'1" height and commanding stance',
    section: 'modeling',
  },
  {
    id: 'balcony-suit-night',
    src: '/images/balcony-suit-night.png',
    alt: 'Hrishabh Gupta leaning on balcony in suit with evening city bokeh lights',
    category: 'lookbook',
    orientation: 'portrait',
    title: 'Noir Elegance',
    subtitle: 'Character & Mood',
    caption: 'Classic evening suit portrait with city night bokeh',
    section: 'lookbook',
  },
  {
    id: 'corporate-suit-blue',
    src: '/images/corporate-suit-blue.png',
    alt: 'Hrishabh Gupta in tailored blue suit amidst corporate high-rises',
    category: 'model',
    orientation: 'portrait',
    title: 'Corporate Command',
    subtitle: 'Modern Lead',
    caption: 'High-fashion corporate look in front of modern glass architecture',
    section: 'modeling',
  },
  {
    id: 'casual-cowboy-hat',
    src: '/images/casual-cowboy-hat.jpeg',
    alt: 'Hrishabh Gupta wearing brown cowboy hat and sunglasses outdoors',
    category: 'actor',
    orientation: 'portrait',
    title: 'Character Vignette',
    subtitle: 'Expressive & Unfiltered',
    caption: 'Natural, expressive character look with cowboy hat',
    section: 'actor',
  },
  {
    id: 'english-gaon-pose',
    src: '/images/english-gaon-pose.jpeg',
    alt: 'Hrishabh Gupta performing an expressive stance in front of yellow cottage',
    category: 'actor',
    orientation: 'portrait',
    title: 'Comic Energy',
    subtitle: 'Stage & Improvisation',
    caption: 'Dynamic stage-style performance pose at The English Gaon',
    section: 'mimicry',
  },
  {
    id: 'gala-red-jacket',
    src: '/images/gala-red-jacket.jpg',
    alt: 'Hrishabh Gupta in rose pink jacket and sunglasses at evening event',
    category: 'lookbook',
    orientation: 'portrait',
    title: 'Gala Distinction',
    subtitle: 'Charm & Charisma',
    caption: 'Fashion forward event portrait showing social charisma',
    section: 'lookbook',
  },
  {
    id: 'boat-sunset-silhouette',
    src: '/images/boat-sunset-silhouette.jpeg',
    alt: 'Artistic silhouette of Hrishabh Gupta standing on a boat during golden sunset',
    category: 'actor',
    orientation: 'landscape',
    title: 'Cinematic Horizon',
    subtitle: 'Atmosphere & Motion',
    caption: 'Artistic sunset silhouette reflecting theatrical depth',
    section: 'actor',
  },
];
