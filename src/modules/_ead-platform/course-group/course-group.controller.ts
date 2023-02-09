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
import { CourseGroupDTO } from 'src/modules/_ead-platform/course-group/course-group.dto';
import { JwtAuthGuard } from 'src/modules/_security/auth/guard/jwt-auth.guard';
import { CourseGroupService } from './course-group.service';

@UseGuards(JwtAuthGuard)
@Controller('api/course-group')
export class CourseGroupController {
  constructor(private readonly courseGroupService: CourseGroupService) {}

  @Get()
  async findAll() {
    return this.courseGroupService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.courseGroupService.findOne(id);
  }

  @Post()
  async create(@Body() data: CourseGroupDTO) {
    return this.courseGroupService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CourseGroupDTO) {
    return this.courseGroupService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.courseGroupService.delete(id);
  }
}
