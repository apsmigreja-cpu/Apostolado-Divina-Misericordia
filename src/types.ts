export interface Post {
  id?: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
  author?: string;
}

export interface Prayer {
  id?: string;
  title: string;
  text: string;
  category?: string;
}

export interface GalleryItem {
  id?: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
}
