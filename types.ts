
export interface Service {
  title: string;
  description: string;
  icon: string;
  category: 'core' | 'specialized';
}

export interface Industry {
  name: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  sublabel: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
