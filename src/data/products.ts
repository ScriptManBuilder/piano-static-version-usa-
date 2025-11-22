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
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (4).mp4";
  }
  if (productId === 5) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (5).mp4";
  }
  if (productId === 6) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (6).mp4";
  }
  if (productId === 7) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (7).mp4";
  }
  if (productId === 8) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (8).mp4";
  }
  if (productId === 9) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (9).mp4";
  }
  if (productId === 10) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (10).mp4";
  }
  if (productId === 11) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (11).mp4";
  }
  if (productId === 12) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (12).mp4";
  }
  if (productId === 13) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (13).mp4";
  }
  if (productId === 14) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (14).mp4";
  }
  if (productId === 15) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (15).mp4";
  }
  if (productId === 16) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (16).mp4";
  }
  if (productId === 17) {
    return "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (17).mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 12-15: 4 videos each ($89.99-$109.99)
  if (productId === 12) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (1).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (2).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (3).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (4).mp4"
    ];
  }
  if (productId === 13) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (5).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (6).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (7).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (8).mp4"
    ];
  }
  if (productId === 14) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (9).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (10).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (11).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (12).mp4"
    ];
  }
  if (productId === 15) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (13).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (14).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (15).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (16).mp4"
    ];
  }
  
  // Courses 16-17: 5 videos each ($119-$139)
  if (productId === 16) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (20).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (21).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (22).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (23).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (25).mp4"
    ];
  }
  if (productId === 17) {
    return [
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (26).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (27).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (28).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (29).mp4",
      "/videos/Piano From Zero To Pro Beginner Essentials To Play Piano Amosdol (30).mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Piano Fundamentals: Getting Started",
    price: 1.00,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Introduction to Piano basics - perfect starting point for complete beginners.",
    detailedDescription: "Begin your piano journey with this essential introduction. Learn the very basics of piano playing, understanding your instrument, and preparing for your musical adventure.",
    category: "Piano Basics",
    features: [
      "Introduction to piano",
      "Understanding the keyboard", 
      "First steps guide",
      "Basic orientation",
      "Beginner-friendly approach"
    ],
    specifications: {
      "Duration": "5 minutes",
      "Level": "Complete Beginner",
      "Language": "English",
      "Focus": "Piano Introduction",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Piano Keys & Notes",
    price: 1.95,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    description: "Learn piano keys, notes, and basic music theory fundamentals.",
    detailedDescription: "Understand the piano keyboard layout, note names, and essential music theory. This course builds your foundation for reading music and understanding piano structure.",
    category: "Music Theory",
    features: [
      "Keyboard layout mastery",
      "Note identification",
      "Basic music theory",
      "Key understanding",
      "Foundation building"
    ],
    specifications: {
      "Duration": "7 minutes",
      "Level": "Beginner",
      "Focus": "Keys & Notes",
      "Topics": "Theory, keyboard layout",
      "Access": "6 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Proper Hand Position & Posture",
    price: 6.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Master correct hand position and body posture for effective piano playing.",
    detailedDescription: "Learn the proper hand shape, finger positioning, and body posture essential for playing piano efficiently and avoiding injury. Build strong technical foundations.",
    category: "Technique",
    features: [
      "Correct hand position",
      "Body posture alignment",
      "Finger placement techniques",
      "Ergonomic playing methods",
      "Injury prevention"
    ],
    specifications: {
      "Duration": "8 minutes",
      "Level": "Beginner",
      "Focus": "Posture & Hand Position",
      "Tools": "Proper technique fundamentals",
      "Access": "8 months",
      "Bonus": "Posture checklist"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Basic Finger Exercises",
    price: 9.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Essential finger exercises to build strength, coordination, and dexterity.",
    detailedDescription: "Develop finger independence and strength through proven exercises. Learn fundamental techniques that form the foundation of all piano playing.",
    category: "Technique Development",
    features: [
      "Finger independence exercises",
      "Coordination development",
      "Strength building",
      "Dexterity training",
      "Daily practice routines"
    ],
    specifications: {
      "Duration": "10 minutes",
      "Level": "Beginner",
      "Focus": "Finger exercises and coordination",
      "Techniques": "Independence, strength, dexterity",
      "Access": "8 months",
      "Bonus": "Exercise routine templates"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Reading Sheet Music - Part 1",
    price: 19.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    description: "Learn to read sheet music and understand musical notation fundamentals.",
    detailedDescription: "Master the basics of reading sheet music including staff, clefs, note values, and rhythms. This essential skill opens the door to playing any piece of music.",
    category: "Music Reading",
    features: [
      "Staff and clef mastery",
      "Note value understanding",
      "Rhythm reading",
      "Musical notation basics",
      "Sight-reading fundamentals"
    ],
    specifications: {
      "Duration": "12 minutes",
      "Level": "Beginner",
      "Focus": "Sheet music reading basics",
      "Skills": "Notation, rhythm, sight-reading",
      "Access": "10 months",
      "Bonus": "Reading practice sheets"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Rhythm & Timing Basics",
    price: 29.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    description: "Develop solid rhythm and timing skills essential for musical performance.",
    detailedDescription: "Master rhythm patterns, time signatures, and develop an internal sense of timing. Learn to play with precision and musicality.",
    category: "Rhythm",
    features: [
      "Time signature understanding",
      "Rhythm pattern mastery",
      "Tempo control",
      "Counting techniques",
      "Metronome practice"
    ],
    specifications: {
      "Duration": "15 minutes",
      "Level": "Intermediate",
      "Focus": "Rhythm, timing, tempo",
      "Applications": "Time signatures, patterns, counting",
      "Access": "10 months",
      "Support": "Rhythm exercise library"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Major Scales & Key Signatures",
    price: 39.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    description: "Master major scales and understand key signatures across all keys.",
    detailedDescription: "Learn all major scales, fingering patterns, and how to identify key signatures. Essential knowledge for playing in any key and understanding music theory.",
    category: "Music Theory",
    features: [
      "All major scales",
      "Proper fingering patterns",
      "Key signature identification",
      "Scale practice techniques",
      "Theory application"
    ],
    specifications: {
      "Duration": "18 minutes",
      "Level": "Intermediate",
      "Focus": "Scales, keys, theory",
      "Applications": "All major keys, fingering, theory",
      "Access": "12 months",
      "Bonus": "Scale reference charts"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Chords & Harmony Fundamentals",
    price: 49.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    description: "Learn chord construction, progressions, and harmony basics.",
    detailedDescription: "Master chord building, common progressions, and harmonic principles. Learn to create beautiful harmonies and understand how music works together.",
    category: "Harmony",
    features: [
      "Chord construction",
      "Common progressions",
      "Harmonic principles",
      "Voicing techniques",
      "Accompaniment patterns"
    ],
    specifications: {
      "Duration": "22 minutes",
      "Level": "Intermediate",
      "Focus": "Chords, harmony, progressions",
      "Techniques": "Construction, voicing, progressions",
      "Access": "12 months",
      "Bonus": "Chord chart library"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Playing Simple Songs",
    price: 59.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    description: "Apply your skills to play complete beginner-friendly songs.",
    detailedDescription: "Put everything together and learn complete songs. This course includes popular melodies and teaches you how to practice and perform pieces confidently.",
    category: "Performance",
    features: [
      "Complete song learning",
      "Practice strategies",
      "Performance techniques",
      "Popular melodies",
      "Confidence building"
    ],
    specifications: {
      "Duration": "25 minutes",
      "Level": "Intermediate",
      "Focus": "Complete songs, performance",
      "Repertoire": "Popular beginner pieces",
      "Access": "12 months",
      "Bonus": "Song sheet music collection"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Dynamics & Expression",
    price: 69.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    description: "Learn to play with emotion, dynamics, and musical expression.",
    detailedDescription: "Transform your playing from mechanical to musical. Master dynamics, phrasing, and expressive techniques that bring music to life.",
    category: "Musicality",
    features: [
      "Dynamic control",
      "Phrasing techniques",
      "Expressive playing",
      "Emotional interpretation",
      "Musical nuance"
    ],
    specifications: {
      "Duration": "28 minutes",
      "Level": "Intermediate",
      "Focus": "Dynamics, expression, musicality",
      "Techniques": "Phrasing, dynamics, emotion",
      "Access": "12 months",
      "Bonus": "Expression exercise library"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Pedaling Techniques",
    price: 79.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    description: "Master the art of pedaling for beautiful, sustained piano sound.",
    detailedDescription: "Learn proper pedaling techniques including damper pedal, soft pedal, and sostenuto pedal. Understand when and how to use pedals for optimal musical effect.",
    category: "Advanced Technique",
    features: [
      "Damper pedal mastery",
      "Soft pedal techniques",
      "Pedal timing",
      "Pedal coordination",
      "Advanced pedaling patterns"
    ],
    specifications: {
      "Duration": "32 minutes",
      "Level": "Intermediate-Advanced",
      "Coverage": "All pedal techniques",
      "Skills": "Pedaling coordination and control", 
      "Access": "15 months",
      "Bonus": "Pedaling practice exercises"
    },
    inStock: true
  },
  {
    id: 12,
    name: "Minor Scales & Advanced Theory",
    price: 89.99,
    image: getProductImage(12),
    images: getProductImages(12),
    video: getProductVideo(12),
    videos: getProductVideos(12),
    description: "Master minor scales, modes, and advanced music theory concepts.",
    detailedDescription: "Dive deep into minor scales (natural, harmonic, melodic), modes, and advanced theoretical concepts. This premium 4-video course expands your musical knowledge significantly.",
    category: "Advanced Theory",
    features: [
      "4 comprehensive video modules",
      "All minor scale types",
      "Modal theory",
      "Advanced harmony",
      "Theoretical applications",
      "Compositional understanding"
    ],
    specifications: {
      "Duration": "35 minutes",
      "Videos": "4 detailed modules",
      "Level": "Advanced",
      "Focus": "Minor scales, modes, theory",
      "Applications": "Composition, improvisation",
      "Access": "15 months",
      "Bonus": "Theory workbook"
    },
    inStock: true
  },
  {
    id: 13,
    name: "Sight Reading Mastery",
    price: 99.99,
    image: getProductImage(13),
    images: getProductImages(13),
    video: getProductVideo(13),
    videos: getProductVideos(13),
    description: "Develop professional sight-reading skills for fluent music reading.",
    detailedDescription: "Master the art of sight-reading with proven techniques and extensive practice. This premium 4-video course transforms your ability to read and play music instantly.",
    category: "Reading Skills",
    features: [
      "4 comprehensive video modules",
      "Sight-reading strategies",
      "Pattern recognition",
      "Reading fluency",
      "Advanced notation",
      "Professional techniques"
    ],
    specifications: {
      "Duration": "24 minutes",
      "Videos": "4 detailed modules",
      "Level": "Advanced",
      "Focus": "Sight-reading mastery",
      "Skills": "Instant music reading",
      "Access": "15 months",
      "Bonus": "Sight-reading exercise book"
    },
    inStock: true
  },
  {
    id: 14,
    name: "Advanced Finger Techniques",
    price: 109.99,
    image: getProductImage(14),
    images: getProductImages(14),
    video: getProductVideo(14),
    videos: getProductVideos(14),
    description: "Master advanced finger techniques including trills, ornaments, and rapid passages.",
    detailedDescription: "Elevate your technique with advanced finger skills. This premium 4-video course covers trills, ornaments, octaves, and rapid passage work for virtuoso playing.",
    category: "Advanced Technique",
    features: [
      "4 comprehensive video modules",
      "Trill mastery",
      "Ornament techniques",
      "Octave playing",
      "Rapid passage work",
      "Virtuoso techniques"
    ],
    specifications: {
      "Duration": "28 minutes",
      "Videos": "4 detailed modules",
      "Level": "Advanced",
      "Focus": "Virtuoso finger techniques",
      "Techniques": "Trills, ornaments, speed",
      "Access": "18 months",
      "Bonus": "Advanced exercise library"
    },
    inStock: true
  },
  {
    id: 15,
    name: "Classical Repertoire Foundation",
    price: 119.99,
    image: getProductImage(15),
    images: getProductImages(15),
    video: getProductVideo(15),
    videos: getProductVideos(15),
    description: "Learn classical piano repertoire from Baroque to Romantic periods.",
    detailedDescription: "Explore essential classical pieces from great composers. This premium 4-video course covers repertoire from Bach, Mozart, Beethoven, and Chopin with detailed instruction.",
    category: "Classical Repertoire",
    features: [
      "4 comprehensive video modules",
      "Bach masterworks",
      "Mozart sonatas",
      "Beethoven pieces",
      "Chopin études",
      "Style interpretation"
    ],
    specifications: {
      "Duration": "32 minutes",
      "Videos": "4 detailed modules",
      "Level": "Advanced",
      "Focus": "Classical repertoire",
      "Composers": "Bach, Mozart, Beethoven, Chopin",
      "Access": "18 months",
      "Bonus": "Annotated sheet music"
    },
    inStock: true
  },
  {
    id: 16,
    name: "Jazz Piano Fundamentals",
    price: 129.99,
    image: getProductImage(16),
    images: getProductImages(16),
    video: getProductVideo(16),
    videos: getProductVideos(16),
    description: "Master jazz piano including improvisation, voicings, and jazz harmony.",
    detailedDescription: "Enter the world of jazz piano with comprehensive training. This premium 5-video course covers jazz theory, chord voicings, improvisation, and classic jazz standards.",
    category: "Jazz Piano",
    features: [
      "5 comprehensive video modules",
      "Jazz theory foundations",
      "Advanced chord voicings",
      "Improvisation techniques",
      "Jazz standards",
      "Swing and rhythm",
      "Comping patterns"
    ],
    specifications: {
      "Duration": "36 minutes",
      "Videos": "5 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Jazz piano complete",
      "Skills": "Improvisation, voicings, standards",
      "Access": "18 months",
      "Bonus": "Jazz lead sheets collection"
    },
    inStock: true
  },
  {
    id: 17,
    name: "Complete Piano Mastery Program",
    price: 139.99,
    image: getProductImage(17),
    images: getProductImages(17),
    video: getProductVideo(17),
    videos: getProductVideos(17),
    description: "Ultimate comprehensive piano course covering all styles, techniques, and performance skills.",
    detailedDescription: "Achieve complete piano mastery with our most comprehensive program. This ultimate 5-video course combines classical, jazz, contemporary styles with advanced performance techniques, professional interpretation, and complete musicianship development.",
    category: "Complete Mastery",
    features: [
      "5 comprehensive video modules",
      "All musical styles covered",
      "Advanced performance techniques",
      "Professional interpretation",
      "Complete musicianship",
      "Audition preparation",
      "Career guidance",
      "Lifetime support"
    ],
    specifications: {
      "Duration": "40 minutes",
      "Videos": "5 comprehensive modules",
      "Level": "All levels to Expert",
      "Coverage": "Complete piano mastery",
      "Skills": "Professional-level performance", 
      "Access": "24 months",
      "Bonus": "Complete resource library + lifetime updates"
    },
    inStock: true
  }
];
