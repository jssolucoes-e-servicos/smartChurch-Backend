import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ChurchDTO } from 'src/modules/church/church.dto';
import { JwtAuthGuard } from 'src/modules/_security/auth/guard/jwt-auth.guard';
import { ChurchService } from './church.service';

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
