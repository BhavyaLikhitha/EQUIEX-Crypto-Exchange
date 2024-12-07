export interface Blog {
    id: number;
    title: string;
    content: string;
    author: string;
    image?: string; // Make image optional if it may not always be present
  }