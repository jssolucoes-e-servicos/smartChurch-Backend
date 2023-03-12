import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { StudantOnLessonDTO } from 'src/modules/_ead-platform/studant-on-lesson/studant-on-lesson.dto';
import { JwtAuthGuard } from 'src/modules/_security/auth/guard/jwt-auth.guard';
import { StudantOnLessonService } from './studant-on-lesson.service';

@UseGuards(JwtAuthGuard)
@Controller('api/studants-on-lessons')
export class StudantOnLessonController {
  constructor(
    private readonly studantOnLessonService: StudantOnLessonService,
  ) {}

  @Get()
  async findAll() {
    return this.studantOnLessonService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.studantOnLessonService.findOne(id);
  }

  @Post()
  async create(@Body() data: StudantOnLessonDTO) {
    return this.studantOnLessonService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: StudantOnLessonDTO) {
    return this.studantOnLessonService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.studantOnLessonService.delete(id);
  }
}
