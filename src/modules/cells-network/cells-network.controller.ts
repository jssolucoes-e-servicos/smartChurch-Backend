import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CellsNetworkDTO } from 'src/modules/cells-network/cells-network.dto';
import { CellsNetworkService } from './cells-network.service';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('cells-networks')
export class CellsNetworkController {
  constructor(private readonly cellsNetworkService: CellsNetworkService) {}
  @Post()
  async create(@Body() data: CellsNetworkDTO){
    return this.cellsNetworkService.create(data);
  }

  @Get()
  async findAll() {
    return this.cellsNetworkService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id:string) {
    return this.cellsNetworkService.findOne(id);
  }

  @Put(":id")
  async update (@Param("id") id:string, @Body() data: CellsNetworkDTO) {
      return this.cellsNetworkService.update(id, data);
  }

  @Delete(":id")
  async delete (@Param("id") id:string) {
      return this.cellsNetworkService.delete(id);
  }

}
