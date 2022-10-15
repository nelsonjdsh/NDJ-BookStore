import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateBookDto, ModifyBookDto } from './dtos';
import { Book, Book_Page } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    public BookRepository: Repository<Book>,
    @InjectRepository(Book_Page)
    public BookPageRepository: Repository<Book_Page>,
  ) {}

  async getMany() {
    const bookData = await this.BookRepository.find({
      relations: ['pages'],
      order: {
        createdAt: 'DESC',
      },
    });
    if (!bookData) return { message: 'No Books to Show.' };
    return {
      message: 'Success',
      bookData,
    };
  }

  async getOne(id: number) {
    if (!id) throw new BadRequestException('Id parameter is required.');
    const book = await this.BookRepository.findOne({
      where: { id: id },
      relations: ['pages'],
    });
    if (!book) throw new NotFoundException('Book Not Found');
    return book;
  }

  async getOneByName(name: string) {
    if (!name)
      throw new BadRequestException('Book name parameter is required.');
    const book = await this.BookRepository.findOne({
      where: { title: name },
      relations: ['pages'],
    });
    if (!book) throw new NotFoundException('Book Not Found');
    return book;
  }

  async createOne(book: CreateBookDto) {
    console.log(book);

    book.num_pages = book.pages.length;
    await this.BookRepository.save(book);
    await this.BookPageRepository.save(book.pages);
    return {
      message: 'Book created successfully.',
    };
  }

  async updateOne(id: number, book: ModifyBookDto) {
    if (!id) throw new BadRequestException('Id parameter is required.');
    const selectedBook = await this.BookRepository.findOne({
      where: { id: id },
      relations: ['pages'],
    });
    if (!selectedBook) throw new NotFoundException('Book not found.');
    const modifiedBook = Object.assign(selectedBook, book);
    return await this.BookRepository.save(modifiedBook);
  }

  async deleteOne(id: number) {
    if (!id) throw new BadRequestException('Id parameter is required.');
    const selectedBook = await this.BookRepository.findOne({
      where: { id: id },
      relations: ['pages'],
    });
    if (!selectedBook) throw new NotFoundException('Book not found.');
    await this.BookRepository.delete(selectedBook.id);
    return { message: 'Book deleted successfully' };
  }
}
