import { BookCategory } from '../enums/book.enum';
import { EnumToString } from '../../helpers/enumToString';
import { Length, IsString, IsBoolean, IsEnum, IsArray } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @Length(2, 50)
  title: string;

  @IsString()
  @Length(2, 20)
  author: string;

  @IsString()
  @Length(1, 20)
  @IsEnum(BookCategory, {
    message: `Invalid Category Value. Category must be one of ${EnumToString(
      BookCategory,
    )}`,
  })
  category: BookCategory;

  @IsString()
  @Length(4, 4)
  year: string;

  @IsString()
  @Length(1, 20)
  edition: string;

  num_pages?: number;

  @IsBoolean()
  status?: boolean;

  @IsArray()
  pages: [object];
}
