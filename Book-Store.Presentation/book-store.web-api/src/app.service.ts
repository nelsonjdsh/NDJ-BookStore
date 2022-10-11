import { Injectable } from '@nestjs/common';
import { BooksService } from './books/books.service';
import { IBook } from './books/interfaces/book';

@Injectable()
export class AppService {
  constructor(private booksService: BooksService) {}

  async createSeed(book: IBook) {
    book.num_pages = book.pages.length;
    await this.booksService.createOne(book).then(() => {
      return { message: 'Ok' };
    });
  }
}
