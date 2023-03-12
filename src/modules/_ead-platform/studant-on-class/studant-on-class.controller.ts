import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { StudantOnClassService } from './studant-on-class.service';
import { JwtAuthGuard } from 'src/modules/_security/auth/guard/jwt-auth.guard';
import { StudantOnClassDTO } from 'src/modules/_ead-platform/studant-on-class/studant-on-class.dto';

@UseGuards(JwtAuthGuard)
@Controller('api/studants-on-class')
export class StudantOnClassController {
  constructor(private readonly studantOnClassService: StudantOnClassService) {}

  @Get()
  async findAll() {
    return this.studantOnClassService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.studantOnClassService.findOne(id);
  }

  @Get('by-studant/:id')
  async findOneByStudant(@Param('id') id: string) {
    return this.studantOnClassService.findOneByStudant(id);
  }

  @Get('by-class/:id')
  async findOneByClass(@Param('id') id: string) {
    return this.studantOnClassService.findOneByClass(id);
  }

  @Get('by-class-tag/:tag')
  async findOneByClassTag(@Param('tag') tag: string) {
    return this.studantOnClassService.findOneByClassTag(tag);
  }

  @Post()
  async create(@Body() data: StudantOnClassDTO) {
    return this.studantOnClassService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: StudantOnClassDTO) {
    return this.studantOnClassService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.studantOnClassService.delete(id);
  }
}
