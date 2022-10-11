import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateBookDto, ModifyBookDto } from './dtos';
import { BooksService } from './books.service';

@Controller('api/books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  async getBooks() {
    return this.bookService.getMany();
  }

  @Get(':id')
  async getBook(@Query('id') id: number) {
    return this.bookService.getOne(id);
  }

  @Get(':name')
  async getBookByName(@Query('name') name: string) {
    return this.bookService.getOneByName(name);
  }

  @Post('/newBook')
  async createBook(@Body() book: CreateBookDto) {
    return this.bookService.createOne(book);
  }

  @Put(':id')
  async updateBook(@Body() book: ModifyBookDto, @Query('id') id: number) {
    return this.bookService.updateOne(id, book);
  }

  @Delete(':id')
  async deleteBook(@Query('id') id: number) {
    return this.bookService.deleteOne(id);
  }
}
