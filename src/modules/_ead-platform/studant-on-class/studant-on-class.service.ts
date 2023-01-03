import { Injectable } from '@nestjs/common';
import { CreateStudantOnClassDto } from './dto/create-studant-on-class.dto';
import { UpdateStudantOnClassDto } from './dto/update-studant-on-class.dto';

@Injectable()
export class StudantOnClassService {
  create(createStudantOnClassDto: CreateStudantOnClassDto) {
    return 'This action adds a new studantOnClass';
  }

  findAll() {
    return `This action returns all studantOnClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studantOnClass`;
  }

  update(id: number, updateStudantOnClassDto: UpdateStudantOnClassDto) {
    return `This action updates a #${id} studantOnClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} studantOnClass`;
  }
}
