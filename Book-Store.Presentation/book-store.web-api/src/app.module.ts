import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { Book, Book_Page } from './books/entities';
// import {database, user, pass, host} from process.env;

@Module({
  imports: [
    BooksModule,
    TypeOrmModule.forFeature([Book, Book_Page]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '-',
      username: '-',
      password: '-',
      database: 'bookstore',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
