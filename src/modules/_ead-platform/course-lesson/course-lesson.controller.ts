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
import { CourseLessonDTO } from 'src/modules/_ead-platform/course-lesson/course-lesson.dto';
import { JwtAuthGuard } from 'src/modules/_security/auth/guard/jwt-auth.guard';
import { CourseLessonService } from './course-lesson.service';

@UseGuards(JwtAuthGuard)
@Controller('api/courses-lessons')
export class CourseLessonController {
  constructor(private readonly courseLessonService: CourseLessonService) {}

  @Get()
  async findAll() {
    return this.courseLessonService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.courseLessonService.findOne(id);
  }

  @Get('find-by-tag/:tag')
  async findByTag(@Param('tag') tag: string) {
    return this.courseLessonService.findByTag(tag);
  }

  @Post()
  async create(@Body() data: CourseLessonDTO) {
    return this.courseLessonService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CourseLessonDTO) {
    return this.courseLessonService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.courseLessonService.delete(id);
  }
}
