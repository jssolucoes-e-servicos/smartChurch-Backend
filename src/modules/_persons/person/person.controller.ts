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
import { PersonDTO } from './person.dto';
import { PersonService } from './person.service';

@Controller('api/persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: PersonDTO) {
    return this.personService.create(data);
  }

  @Post('firt-auth')
  async createWithNotAuth(@Body() data: PersonDTO) {
    return this.personService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.personService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.personService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: PersonDTO) {
    return this.personService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.personService.delete(id);
  }
}
