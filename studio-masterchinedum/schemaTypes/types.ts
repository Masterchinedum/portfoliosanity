// schemas/types.ts
export interface BlogPost {
    _id: string;
    title: string;
    slug: string;
    description: string;
    category: string;
    readTime: string;
    publishedAt: string;
    mainImage: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
      alt: string;
    };
    tags: string[];
  }
  
  export interface WebProject {
    _id: string;
    name: string;
    slug: string;
    link: string;
    description: string;
    mainImage: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
      alt: string;
    };
    techStack: string[];
  }
  
  export interface ScientificProject {
    _id: string;
    title: string;
    slug: string;
    link: string;
    abstract: string;
    projectType: string;
    mainImage: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
      alt: string;
    };
    tags: string[];
  }