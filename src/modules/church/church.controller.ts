import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards  } from '@nestjs/common';
import { ChurchDTO } from 'src/modules/church/church.dto';
import { ChurchService } from './church.service';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('churches')
export class ChurchController {
  constructor(private readonly churchService: ChurchService) {}
  @Post()
  async create(@Body() data: ChurchDTO){
    return this.churchService.create(data);
  }

  @Get()
  async findAll() {
    return this.churchService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id:string) {
    return this.churchService.findOne(id);
  }

  @Put(":id")
  async update (@Param("id") id:string, @Body() data: ChurchDTO) {
      return this.churchService.update(id, data);
  }

  @Delete(":id")
  async delete (@Param("id") id:string) {
      return this.churchService.delete(id);
  }

}
