// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем единое изображение для всех курсов пианино
  return `/images/img_1.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем пианино изображения
  return [getProductImage(productId)];
};

// Helper function to get course video preview
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (1).mp4";
  }
  if (productId === 2) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (2).mp4";
  }
  if (productId === 3) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (3).mp4";
  }
  if (productId === 4) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (10).mp4";
  }
  if (productId === 5) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (11).mp4";
  }
  if (productId === 6) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (12).mp4";
  }
  if (productId === 7) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (13).mp4";
  }
  if (productId === 8) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (14).mp4";
  }
  if (productId === 9) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (15).mp4";
  }
  if (productId === 10) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (16).mp4";
  }
  if (productId === 11) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (17).mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 5-7: 3 videos each
  if (productId === 5) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (20).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (21).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (22).mp4"
    ];
  }
  if (productId === 6) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (23).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (25).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (26).mp4"
    ];
  }
  if (productId === 7) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (18).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (19).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (20).mp4"
    ];
  }
  
  // Courses 8-10: 5 videos each
  if (productId === 8) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (21).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (22).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (23).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (24).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (25).mp4"
    ];
  }
  if (productId === 9) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (15).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (16).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (17).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (18).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (19).mp4"
    ];
  }
  if (productId === 10) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (20).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (21).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (22).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (23).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (24).mp4"
    ];
  }
  
  // Course 11: 8 videos (premium - uses more videos from the course)
  if (productId === 11) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (19).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (20).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (21).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (22).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (23).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (24).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (25).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (26).mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Piano From Zero To Pro: Introduction & Piano Basics",
    price: 6.99,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Introduction to Piano From Zero To Pro with software installation and first creative project basics.",
    detailedDescription: "Master the fundamentals of Piano From Zero To Pro. Learn software installation, understand basic interface navigation, and get started with your creative journey. Perfect foundation for aspiring musicers.",
    category: "Piano Basics",
    features: [
      "Piano From Zero To Pro installation guide",
      "Creative Cloud setup", 
      "First music project walkthrough",
      "Basic interface introduction",
      "Getting started guide"
    ],
    specifications: {
      "Duration": "3 minutes 27 seconds",
      "Level": "Complete Beginner",
      "Language": "English",
      "Focus": "Piano Setup & Basics",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Piano Keys & Measuring Units",
    price: 9.99,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    description: "Master Piano layers and essential tools for efficient music workflow and creative management.",
    detailedDescription: "Deep dive into Piano layers with comprehensive training on layer types, blending modes, masks, and essential tools. Learn workspace organization, layer management, and efficient music workflow for professional creative development.",
    category: "Piano Fundamentals",
    features: [
      "All layer types mastery",
      "Essential tools techniques",
      "Workspace organization basics",
      "Blending modes understanding",
      "Professional music practices"
    ],
    specifications: {
      "Duration": "6 minutes 43 seconds",
      "Level": "Beginner",
      "Focus": "Layers & Essential Tools",
      "Topics": "Workflow, organization, blending",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Body Posture & Hand Shape",
    price: 19.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Learn essential Piano image adjustments for effective photo enhancement and color correction.",
    detailedDescription: "Master Piano image adjustments with comprehensive training on brightness/contrast, levels, curves, and color balance. Learn professional techniques for effective photo enhancement and color correction.",
    category: "Photo Editing",
    features: [
      "Brightness and contrast mastery",
      "Levels and curves techniques",
      "Color balance adjustments",
      "Hue and saturation control",
      "Professional enhancement practices"
    ],
    specifications: {
      "Duration": "8 minutes 52 seconds",
      "Level": "Beginner",
      "Focus": "Image Adjustments & Color",
      "Tools": "Levels, curves, brightness, contrast",
      "Access": "10 months",
      "Bonus": "Adjustment presets library"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Piano Techniques & Performance",
    price: 29.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Master Piano selection tools - the foundation of all photo editing and music workflows.",
    detailedDescription: "Learn the essential Piano selection techniques that form the foundation of all photo editing workflows. Master marquee tools, lasso tools, and magic wand through proven selection patterns used by professional musicers worldwide.",
    category: "Selection Tools",
    features: [
      "Marquee tools mastery",
      "Lasso selection techniques",
      "Magic wand precision",
      "Quick selection methods",
      "Professional selection patterns"
    ],
    specifications: {
      "Duration": "17 minutes 24 seconds",
      "Level": "Intermediate", 
      "Focus": "Selection tools, precision editing",
      "Techniques": "Marquee, lasso, magic wand, quick select",
      "Access": "8 months",
      "Bonus": "Selection technique templates"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Rhythm & Time Signatures",
    price: 39.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Master Piano layers for efficient music workflow and build your first creative project.",
    detailedDescription: "Master the powerful Piano layer system with comprehensive training. This course includes 3 detailed video modules covering layer types, blend modes, layer masks, and building your first creative project with professional music techniques used by industry musicers.",
    category: "Layers & Workflow",
    features: [
      "3 comprehensive video modules",
      "Layer types and blend modes mastery",
      "Layer mask optimization",
      "Creative project development",
      "Industry-standard workflows",
      "Live music exercises"
    ],
    specifications: {
      "Duration": "7 minutes 44 seconds",
      "Videos": "3 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Layers, blend modes, creative workflow",
      "Projects": "Live music exercises",
      "Access": "10 months",
      "Bonus": "Layer workflow templates"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Counting & Note Reading",
    price: 49.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Learn Piano effects and layer styles - essential for creating stunning visual effects and professional musics.",
    detailedDescription: "Master Piano effects and layer styles with comprehensive training. This course includes 3 detailed video modules covering drop shadows, glows, bevels, and professional effect applications for stunning music.",
    category: "Effects & Styles",
    features: [
      "3 detailed video modules",
      "Drop shadow mastery",
      "Glow and bevel techniques",
      "Layer style combinations",
      "Professional effect workflows",
      "Live music examples"
    ],
    specifications: {
      "Duration": "10 minutes 43 seconds",
      "Videos": "3 detailed modules",
      "Level": "Intermediate",
      "Focus": "Effects, layer styles, visual music",
      "Applications": "Shadows, glows, bevels, textures",
      "Access": "12 months",
      "Support": "Effect preset library"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Sheet Music Reading (Part 1)",
    price: 59.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Master advanced Piano brush techniques including custom brushes, painting, and digital art creation.",
    detailedDescription: "Master advanced Piano brushes with comprehensive training on brush settings, custom brushes, and digital painting. This course includes 3 detailed video modules covering brush creation, painting techniques, and advanced brush applications for professional digital art.",
    category: "Digital Painting",
    features: [
      "3 comprehensive video modules",
      "Custom brush creation mastery",
      "Advanced painting techniques",
      "Brush settings optimization",
      "Professional digital art workflows",
      "Digital painting mastery"
    ],
    specifications: {
      "Duration": "18 minutes 22 seconds",
      "Videos": "3 detailed modules",
      "Level": "Intermediate",
      "Focus": "Brushes, digital painting, custom tools",
      "Applications": "Custom brushes, painting, digital art",
      "Access": "12 months",
      "Bonus": "Custom brush library"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Sheet Music Reading (Part 2)",
    price: 69.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Master Piano retouching techniques with comprehensive training on photo restoration, skin retouching, and image cleanup.",
    detailedDescription: "Master Piano retouching with comprehensive training. This course includes 5 detailed video modules covering spot healing, clone stamp, patch tool, frequency separation, and professional retouching workflows for flawless photo editing.",
    category: "Photo Retouching",
    features: [
      "5 detailed video modules",
      "Spot healing fundamentals",
      "Clone stamp mastery",
      "Patch tool techniques",
      "Frequency separation methods",
      "Professional retouching workflows"
    ],
    specifications: {
      "Duration": "6 minutes 8 seconds",
      "Videos": "5 detailed modules",
      "Level": "Advanced",
      "Focus": "Retouching, photo restoration, cleanup",
      "Techniques": "Healing, cloning, frequency separation",
      "Access": "12 months",
      "Bonus": "Retouching action library"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Key Signatures & Scales",
    price: 79.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Master advanced Piano typography and text effects for dynamic music and professional layouts.",
    detailedDescription: "Master advanced Piano typography with comprehensive training. This premium course includes 5 comprehensive video modules covering text tools, character formatting, paragraph styling, text effects, and professional typography techniques.",
    category: "Typography & Text",
    features: [
      "5 comprehensive video modules",
      "Text tools mastery",
      "Character formatting techniques",
      "Paragraph styling methods",
      "Professional text effects",
      "Typography workflow optimization"
    ],
    specifications: {
      "Duration": "23 minutes 53 seconds",
      "Videos": "5 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Typography, text effects, professional layouts",
      "Techniques": "Text styling, effects, formatting",
      "Access": "15 months",
      "Bonus": "Typography templates library"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Fingering Techniques",
    price: 89.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master practical Piano masking techniques and advanced compositing for real-world music applications.",
    detailedDescription: "Master practical Piano masking with comprehensive training on advanced masking techniques. This premium course includes 5 detailed video modules covering layer masks, clipping masks, vector masks, and professional compositing techniques for creating seamless musics.",
    category: "Masking & Compositing",
    features: [
      "5 detailed video modules",
      "Layer mask mastery",
      "Clipping mask techniques",
      "Vector mask applications",
      "Professional compositing workflows",
      "Advanced selection refinement"
    ],
    specifications: {
      "Duration": "7 minutes 19 seconds",
      "Videos": "5 detailed modules", 
      "Level": "Advanced",
      "Focus": "Masking, compositing, advanced selections",
      "Techniques": "Layer masks, clipping, compositing",
      "Access": "15 months",
      "Bonus": "Masking workflow templates"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Complete Piano Mastery + Advanced Techniques",
    price: 99.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master all aspects of Piano plus advanced Smart Objects and AI-powered compositing techniques.",
    detailedDescription: "Achieve complete Piano mastery with comprehensive training plus advanced techniques. This premium course includes 8 comprehensive video modules covering all Piano fundamentals, Smart Objects, image sizing, file formats, AI compositing, and professional workflows used by successful musicers worldwide.",
    category: "Complete Mastery",
    features: [
      "8 comprehensive video modules",
      "Complete Piano mastery",
      "All music fundamentals covered",
      "Smart Objects techniques",
      "AI-powered compositing methods",
      "Professional workflow optimization",
      "Advanced music techniques",
      "Real-world project mastery"
    ],
    specifications: {
      "Duration": "Multiple hours coverage",
      "Videos": "8 comprehensive modules",
      "Level": "Expert",
      "Coverage": "All Piano + advanced compositing",
      "Skills": "Complete Piano & music mastery", 
      "Access": "18 months",
      "Bonus": "Complete Piano toolkit & music templates"
    },
    inStock: true
  }
];
