/**
 * Central site configuration.
 * Edit values here; they propagate across the whole site.
 */

export const site = {
  name: "Hidaayah Online Quran Academy",
  shortName: "Hidaayah Online",
  tagline: "A Trusted Way to Learn Quran from Home",
  subtitle: "Learn Quran Online with Proper Tajweed",
  description:
    "Hidaayah Online Quran Academy offers one-to-one live online Quran classes for kids & adults: Noorani Qaida, Quran Reading, Tajweed, Hifz, Salah, Duas & Basic Islamic Studies. Free trial class available.",
  url: "https://hidaayah-online.netlify.app",
  email: "",
  // Indian number in international format for display
  phoneDisplay: "+91 76709 65471",
  // Digits only (country code + number) for wa.me / tel links
  whatsappNumber: "917670965471",
  // Monthly fee, change in one place
  fee: {
    amount: 500,
    currency: "₹",
    period: "month",
  },
} as const;

/** Build a WhatsApp deep link with an optional pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const whatsappMessages = {
  general:
    "Assalamu Alaikum, I came across Hidaayah Online Quran Academy and would like to know more about your classes.",
  trial:
    "Assalamu Alaikum, I would like to book a FREE trial Quran class. Please share the details.",
} as const;

export const tel = `tel:+${site.whatsappNumber}`;

/** Primary navigation. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Courses", href: "/courses/" },
  { label: "Fee Plans", href: "/fee-plans/" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/contact/" },
] as const;
