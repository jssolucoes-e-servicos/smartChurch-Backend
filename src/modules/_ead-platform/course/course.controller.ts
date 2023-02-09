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
import { CourseDTO } from 'src/modules/_ead-platform/course/course.dto';
import { JwtAuthGuard } from 'src/modules/_security/auth/guard/jwt-auth.guard';
import { CourseService } from './course.service';

@UseGuards(JwtAuthGuard)
@Controller('api/courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.courseService.findOne(id);
  }

  @Post()
  async create(@Body() data: CourseDTO) {
    return this.courseService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CourseDTO) {
    return this.courseService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.courseService.delete(id);
  }
}
