import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CellDTO } from 'src/modules/cell/cell.dto';
import { CellService } from './cell.service';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('cells')
export class CellController {
  constructor(private readonly cellService: CellService) {}

  @Post()
  async create(@Body() data: CellDTO){
    return this.cellService.create(data);
  }

  @Get()
  async findAll() {
    return this.cellService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id:string) {
    return this.cellService.findOne(id);
  }

  @Put(":id")
  async update (@Param("id") id:string, @Body() data: CellDTO) {
      return this.cellService.update(id, data);
  }

  @Delete(":id")
  async delete (@Param("id") id:string) {
      return this.cellService.delete(id);
  }

}
