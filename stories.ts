export interface Story {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  price: number;
  rating: number;
  reviews: number;
  coverGradient: string;
  isFeatured?: boolean;
}

export const stories: Story[] = [
  {
    id: "1",
    title: "عطر السر",
    category: "تجاري",
    excerpt: "قصة تاجر عطور يكتشف سر تركيبة قديمة تغير حياته إلى الأبد.",
    price: 49,
    rating: 4.8,
    reviews: 132,
    coverGradient: "from-purple-900 to-amber-800",
    isFeatured: true,
  },
  {
    id: "2",
    title: "رحلة رائحة",
    category: "تجاري",
    excerpt: "من مقاهي المدينة القديمة إلى العالمية... رحلة شاب وعطره الخاص.",
    price: 39,
    rating: 4.6,
    reviews: 89,
    coverGradient: "from-amber-900 to-orange-700",
    isFeatured: true,
  },
  {
    id: "3",
    title: "اللحظة الفاخرة",
    category: "تجاري",
    excerpt: "كيف حولت لحظة واحدة بسيطة حياة مصمم ساعات إلى إمبراطورية.",
    price: 49,
    rating: 4.9,
    reviews: 156,
    coverGradient: "from-zinc-800 to-amber-700",
    isFeatured: true,
  },
  {
    id: "4",
    title: "بيت الهوية",
    category: "تجاري",
    excerpt: "قصة مهندس معماري يعيد اكتشاف جذوره من خلال تصميم منزل.",
    price: 39,
    rating: 4.7,
    reviews: 74,
    coverGradient: "from-slate-800 to-purple-800",
    isFeatured: true,
  },
  {
    id: "5",
    title: "مملكة الظلال السحرية",
    category: "خيال",
    excerpt: "في عالم مليء بالأسرار والسحر، يكتشف فتى قدرته على السيطرة على الظلال.",
    price: 29,
    rating: 4.5,
    reviews: 210,
    coverGradient: "from-indigo-900 to-purple-700",
  },
  {
    id: "6",
    title: "سر الجبل المنسي",
    category: "غموض",
    excerpt: "لغز قديم في جبال نائية يقود مجموعة من المستكشفين إلى اكتشاف مرعب.",
    price: 35,
    rating: 4.4,
    reviews: 98,
    coverGradient: "from-emerald-900 to-teal-800",
  },
  {
    id: "7",
    title: "رحلة التاجر الذكي",
    category: "تجاري",
    excerpt: "شاب يبني إمبراطوريته التجارية من الصفر رغم كل العقبات.",
    price: 42,
    rating: 4.8,
    reviews: 167,
    coverGradient: "from-amber-800 to-yellow-700",
  },
  {
    id: "8",
    title: "مدينة الأشباح",
    category: "رعب",
    excerpt: "عندما تقرر مجموعة من الأصدقاء قضاء ليلة في مدينة مهجورة...",
    price: 25,
    rating: 4.3,
    reviews: 143,
    coverGradient: "from-gray-900 to-red-900",
  },
];