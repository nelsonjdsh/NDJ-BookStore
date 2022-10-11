import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Book_Page {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  page_content!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ManyToOne(() => Book, (book) => book.pages)
  @JoinColumn({ name: 'book' })
  book_: Book;
}
