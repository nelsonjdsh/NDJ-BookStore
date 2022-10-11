import { CreateBookDto } from './create-book.dto';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class ModifyBookDto extends PartialType(
  OmitType(CreateBookDto, ['title'] as const),
) {}
