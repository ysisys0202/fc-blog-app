import Category from "types/category";

export type Post = {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  uid?: string;
  category?: Category;
};
