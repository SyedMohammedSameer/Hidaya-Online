/**
 * Course catalogue. Icons map to lucide-react names used in components.
 */

export type Course = {
  slug: string;
  title: string;
  titleArabic?: string;
  icon: string;
  summary: string;
  details: string;
  level: string;
  points: string[];
};

export const courses: Course[] = [
  {
    slug: "noorani-qaida",
    title: "Noorani Qaida",
    titleArabic: "القاعدة النورانية",
    icon: "BookOpen",
    level: "Beginner",
    summary:
      "The perfect starting point — learn Arabic letters, correct pronunciation, and how to join words.",
    details:
      "A structured foundation course covering the Arabic alphabet, letter sounds (makharij), harakaat, and the joining of letters into words — preparing students to read the Quran with confidence.",
    points: [
      "Arabic letters & their correct sounds",
      "Pronunciation from the right articulation points",
      "Joining letters and reading words",
      "Foundation for fluent Quran reading",
    ],
  },
  {
    slug: "quran-reading",
    title: "Quran Reading",
    titleArabic: "تلاوة القرآن",
    icon: "BookMarked",
    level: "Beginner → Intermediate",
    summary:
      "Read the Quran fluently with correct pronunciation and growing confidence.",
    details:
      "Guided, one-to-one reading practice that builds fluency and accuracy. Students progress at their own pace with consistent feedback and correction from the teacher.",
    points: [
      "Fluent, confident recitation",
      "Correct pronunciation of every letter",
      "Regular reading practice with feedback",
      "Steady, level-based progression",
    ],
  },
  {
    slug: "tajweed",
    title: "Tajweed Course",
    titleArabic: "علم التجويد",
    icon: "Sparkles",
    level: "Intermediate",
    summary:
      "Beautify and perfect your recitation by learning the rules of Tajweed, step by step.",
    details:
      "Learn the rules that govern correct Quranic recitation — from the characteristics of letters to the rules of noon, meem, madd, and more — applied directly to your own reading.",
    points: [
      "Rules of Noon Saakin & Tanween",
      "Rules of Meem Saakin & Madd",
      "Characteristics & articulation of letters",
      "Apply Tajweed to live recitation",
    ],
  },
  {
    slug: "hifz",
    title: "Hifz Program",
    titleArabic: "تحفيظ القرآن",
    icon: "Brain",
    level: "All levels",
    summary:
      "Memorize selected Surahs or the complete Quran with structured revision and teacher guidance.",
    details:
      "A disciplined memorization program with a personalised plan, daily new portion (sabaq), recent revision (sabqi), and old revision (manzil) to ensure strong, lasting retention.",
    points: [
      "Personalised memorization plan",
      "Daily memorization & revision cycle",
      "Strong long-term retention",
      "From short Surahs to complete Hifz",
    ],
  },
  {
    slug: "salah-duas",
    title: "Salah & Duas",
    titleArabic: "الصلاة والأدعية",
    icon: "HandHeart",
    level: "All levels",
    summary:
      "Learn the correct method of Salah along with daily and essential Sunnah Duas.",
    details:
      "Practical learning of how to perform Salah correctly, the Surahs needed within it, and a collection of authentic everyday Duas to keep the remembrance of Allah alive throughout the day.",
    points: [
      "Correct method of performing Salah",
      "Essential Surahs for prayer",
      "Daily & Sunnah Duas",
      "Adhkar for everyday life",
    ],
  },
  {
    slug: "islamic-studies",
    title: "Basic Islamic Studies",
    titleArabic: "العلوم الإسلامية",
    icon: "GraduationCap",
    level: "All levels",
    summary:
      "Understand core Islamic beliefs, manners, supplications, and important daily practices.",
    details:
      "An accessible introduction to the fundamentals of faith (Aqeedah), good character (Akhlaq), Islamic manners (Adab), and the practices every Muslim should know — suitable for children and adults.",
    points: [
      "Core beliefs & pillars of Islam",
      "Islamic manners & good character",
      "Important supplications",
      "Everyday Sunnah practices",
    ],
  },
];
