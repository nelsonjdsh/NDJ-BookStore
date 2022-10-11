import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Book_Page } from './book-page.entity';

@Entity('Book')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  author!: string;

  @Column({ type: 'varchar', length: 10 })
  year!: string;

  @Column({ type: 'varchar', length: 255 })
  category!: string;

  @Column({ type: 'integer', nullable: false })
  num_pages!: number;

  @Column({ type: 'varchar', length: 255 })
  edition!: string;

  @Column({ type: 'boolean' })
  status!: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @OneToMany(() => Book_Page, (book_page) => book_page.book_, { cascade: true })
  pages: Book_Page[];
}
