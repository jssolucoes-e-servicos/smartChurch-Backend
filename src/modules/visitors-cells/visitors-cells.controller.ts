import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { VisitorCellDTO } from 'src/modules/visitors-cells/visitors-cells.dto';
import { VisitorsCellsService } from './visitors-cells.service';

@Controller('visitors-cells')
export class VisitorsCellsController {
  constructor(private readonly visitorsCellsService: VisitorsCellsService) {}
  @Post()
  async create(@Body() data: VisitorCellDTO){
    return this.visitorsCellsService.create(data);
  }

  @Get()
  async findAll() {
    return this.visitorsCellsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id:string) {
    return this.visitorsCellsService.findOne(id);
  }

  @Put(":id")
  async update (@Param("id") id:string, @Body() data: VisitorCellDTO) {
      return this.visitorsCellsService.update(id, data);
  }

  @Delete(":id")
  async delete (@Param("id") id:string) {
      return this.visitorsCellsService.delete(id);
  }

}
