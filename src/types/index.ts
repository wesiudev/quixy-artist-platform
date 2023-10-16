export type Product = {
  id: number;
  name: string;
  price: number;
};
export type Section = {
  title: string;
  content: string;
};
export type ArtworkData = {
  images: string[];
  title: string;
  artist: string;
  year: number;
  medium: string;
  dimensions: string;
  price: number;
  isPrint: boolean;
  sections: Section[];
  category?: string;
  slug?: string;
};
export type Service = {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  price: string;
  description: {
    h1: string;
    about: string;
    reasons: string[];
    summary: string;
  };
};
export type Tattoo = {
  projectSrc: string;
  workSrc: string;
  title: string;
  description: string;
  meaning: string;
  partsOfTheBody: string[];
  id?: string;
};
export type Post = {
  postId: string;
  title: string;
  sections: Section[];
  intro: string;
  outro: string;
  tags: string[];
  url: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
};

/**
 * Struktura Post pozwala na przechowywanie informacji o pojedynczym poście na stronie internetowej.
 * Zawiera identyfikator posta, tytuł, sekcje zawierające nagłówek i treść, wstęp, zakończenie,
 * tagi, adres URL prowadzący do posta oraz metadane SEO takie jak meta-tytuł, meta-opis oraz meta-słowa kluczowe.
 *
 * @property {string} postId - Unikalny identyfikator posta.
 * @property {string} title - Tytuł posta.
 * @property {Section[]} sections - Tablica sekcji zawierających nagłówek i treść.
 * @property {string} intro - Wstęp do posta.
 * @property {string} outro - Zakończenie posta.
 * @property {string[]} tags - Tagi przypisane do posta.
 * @property {string} url - Adres URL prowadzący do tego konkretnego posta.
 * @property {string} metaTitle - Meta-tytuł dla celów SEO (opcjonalny).
 * @property {string} metaDescription - Meta-opis dla celów SEO (opcjonalny).
 * @property {string[]} metaKeywords - Lista meta-słów kluczowych dla celów SEO (opcjonalna).
 */
