import { PartialType } from '@nestjs/swagger';
import { CreateStudantOnClassDto } from './create-studant-on-class.dto';

export class UpdateStudantOnClassDto extends PartialType(CreateStudantOnClassDto) {}
