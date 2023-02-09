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
import { ChurchLinkDTO } from './church-link.dto';
import { JwtAuthGuard } from 'src/modules/_security/auth/guard/jwt-auth.guard';
import { ChurchLinkService } from './church-link.service';

@UseGuards(JwtAuthGuard)
@Controller('api/church-links')
export class ChurchLinkController {
  constructor(private readonly churchLinkService: ChurchLinkService) {}
  @Post()
  async create(@Body() data: ChurchLinkDTO) {
    return this.churchLinkService.create(data);
  }

  @Get()
  async findAll() {
    return this.churchLinkService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.churchLinkService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ChurchLinkDTO) {
    return this.churchLinkService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.churchLinkService.delete(id);
  }
}
