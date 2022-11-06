import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PeopleDTO } from 'src/modules/people/people.dto';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}
  @Post()
  async create(@Body() data: PeopleDTO){
    return this.peopleService.create(data);
  }

  @Get()
  async findAll() {
    return this.peopleService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id:string) {
    return this.peopleService.findOne(id);
  }

  @Put(":id")
  async update (@Param("id") id:string, @Body() data: PeopleDTO) {
      return this.peopleService.update(id, data);
  }

  @Delete(":id")
  async delete (@Param("id") id:string) {
      return this.peopleService.delete(id);
  }

}
