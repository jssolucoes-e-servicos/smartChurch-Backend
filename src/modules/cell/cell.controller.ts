import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CellDTO } from 'src/modules/cell/cell.dto';
import { JwtAuthGuard } from 'src/modules/_security/auth/guard/jwt-auth.guard';
import { CellService } from './cell.service';

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
