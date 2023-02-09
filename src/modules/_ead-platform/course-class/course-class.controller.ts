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
import { CourseClassDTO } from 'src/modules/_ead-platform/course-class/course-class.dto';
import { JwtAuthGuard } from 'src/modules/_security/auth/guard/jwt-auth.guard';
import { CourseClassService } from './course-class.service';

@UseGuards(JwtAuthGuard)
@Controller('api/courses-class')
export class CourseClassController {
  constructor(private readonly courseClassService: CourseClassService) {}

  @Get()
  async findAll() {
    return this.courseClassService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.courseClassService.findOne(id);
  }

  @Post()
  async create(@Body() data: CourseClassDTO) {
    return this.courseClassService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CourseClassDTO) {
    return this.courseClassService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.courseClassService.delete(id);
  }
}
