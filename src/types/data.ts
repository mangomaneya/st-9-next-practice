type News = {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: number;
};
export type NewsData = News[];

export type Blogs = {
    id: string,
      title: string
      content: string
      author: string
      category:string
      createdAt: number
      tags: string[]
}