export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  size: string; // e.g. "2,100 m²"
  description: string;
  image: string;
  tag?: string; // e.g. "Available Property"
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  specialty?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  companyName: string;
  companyLogo?: string;
  propertyPurchased: string;
  review: string;
  rating: number;
  image: string;
}
