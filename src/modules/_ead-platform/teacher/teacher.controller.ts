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
import { JwtAuthGuard } from 'src/modules/_security/auth/guard/jwt-auth.guard';
import { TeacherService } from './teacher.service';
import { TeacherDTO } from './teacher.dto';

@UseGuards(JwtAuthGuard)
@Controller('api/teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  async findAll() {
    return this.teacherService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.teacherService.findOne(id);
  }

  @Post()
  async create(@Body() data: TeacherDTO) {
    return this.teacherService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: TeacherDTO) {
    return this.teacherService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.teacherService.delete(id);
  }
}
