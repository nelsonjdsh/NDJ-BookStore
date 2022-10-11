import { BookCategory } from '../enums/book.enum';

export interface IBook {
  title: string;
  author: string;
  year: string;
  category: BookCategory;
  edition: string;
  num_pages?: number;
  status?: boolean;
  pages: [any];
}
