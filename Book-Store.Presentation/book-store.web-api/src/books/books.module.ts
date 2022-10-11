import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book, Book_Page } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Book_Page])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
