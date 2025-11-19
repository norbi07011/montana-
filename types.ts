
export enum Language {
  NL = 'NL',
  EN = 'EN',
  TR = 'TR',
  PL = 'PL',
  BG = 'BG',
  AR = 'AR',
  DE = 'DE',
  HU = 'HU',
  FR = 'FR',
}

export interface ContentText {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaCall: string;
    ctaQuote: string;
  };
  features: {
    title: string;
    f1: string;
    f2: string;
    f3: string;
    f4: string;
  };
  servicesPage: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  projectsPage: {
    title: string;
    filterAll: string;
    filterLeak: string;
    filterBath: string;
    filterHeat: string;
  };
  aboutPage: {
    title: string;
    storyTitle: string;
    storyText: string;
    valuesTitle: string;
    v1: string;
    v2: string;
    v3: string;
    v4: string;
  };
  contactPage: {
    title: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formType: string;
    formMessage: string;
    formSubmit: string;
    privacy: string;
    types: {
      leak: string;
      clog: string;
      heat: string;
      bath: string;
      other: string;
    };
  };
  forms: {
    labels: {
      name: string;
      address: string;
      city: string;
      phone: string;
      desc: string;
      sendWa: string;
      close: string;
    };
    questions: {
      location: string; // Where is the leak/clog?
      urgency: string; // How urgent?
      propertyType: string; // House/Apartment/Office
      roofType: string; // Bitumen/Tiles/Zinc
      boilerBrand: string; // Brand of boiler
      boilerAge: string; // Age of installation
      heatingSystem: string; // Radiators/Floor Heating
      dimensions: string; // Approx dimensions
      surface: string; // Surface area m2
      desiredStyle: string; // Modern/Classic/Industrial
      budget: string; // Budget range
      currentState: string; // New build or renovation
      energyLabel: string; // Current Energy Label (A-G)
    }
  };
  common: {
    moreInfo: string;
    requestQuote: string;
    footerText: string;
  };
}

export interface ServiceItem {
  title: string;
  desc: string;
  points: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: 'leak' | 'bath' | 'heat';
  desc: string;
  imageBefore: string;
  imageAfter: string;
}
