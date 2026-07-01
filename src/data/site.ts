/**
 * Central site configuration.
 * Edit values here; they propagate across the whole site.
 */

export const site = {
  // Full name (used in page titles / SEO)
  name: "Falaaheen Online Quran Academy",
  // Brand wordmark + sub-caption (used in the logo lockup)
  brand: "Falaaheen",
  brandSub: "Online Quran Academy",
  // Short label for compact spots
  shortName: "Falaaheen",
  tagline: "A Trusted Way to Learn Quran from Home",
  subtitle: "Learn Quran Online with Proper Tajweed",
  description:
    "Falaaheen Online Quran Academy offers one-to-one live online Quran classes for kids & adults: Noorani Qaida, Quran Reading, Tajweed, Hifz, Salah, Duas & Basic Islamic Studies. Free trial class available.",
  // Update this to your live Netlify domain once set
  url: "https://falaaheen.com",
  email: "",
  // Indian number in international format for display
  phoneDisplay: "+91 76709 65471",
  // Digits only (country code + number) for wa.me / tel links
  whatsappNumber: "917670965471",
} as const;

/** Build a WhatsApp deep link with an optional pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const whatsappMessages = {
  general:
    "Assalamu Alaikum, I came across Falaaheen Online Quran Academy and would like to know more about your classes.",
  trial:
    "Assalamu Alaikum, I would like to book a FREE trial Quran class. Please share the details.",
  fees: "Assalamu Alaikum, I would like to know more about the fees for your Quran classes.",
} as const;

export const tel = `tel:+${site.whatsappNumber}`;

/** Primary navigation. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Courses", href: "/courses/" },
  { label: "Fees", href: "/fee-plans/" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/contact/" },
] as const;
