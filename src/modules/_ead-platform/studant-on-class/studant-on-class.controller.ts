import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudantOnClassService } from './studant-on-class.service';
import { CreateStudantOnClassDto } from './dto/create-studant-on-class.dto';
import { UpdateStudantOnClassDto } from './dto/update-studant-on-class.dto';

@Controller('studant-on-class')
export class StudantOnClassController {
  constructor(private readonly studantOnClassService: StudantOnClassService) {}

  @Post()
  create(@Body() createStudantOnClassDto: CreateStudantOnClassDto) {
    return this.studantOnClassService.create(createStudantOnClassDto);
  }

  @Get()
  findAll() {
    return this.studantOnClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studantOnClassService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudantOnClassDto: UpdateStudantOnClassDto) {
    return this.studantOnClassService.update(+id, updateStudantOnClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studantOnClassService.remove(+id);
  }
}
