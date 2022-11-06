import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { VisitorConvertedDTO } from 'src/modules/visitors-converteds/visitors-converteds.dto';
import { VisitorsConvertedsService } from './visitors-converteds.service';

@Controller('visitors-converteds')
export class VisitorsConvertedsController {
  constructor(private readonly visitorsConvertedsService: VisitorsConvertedsService) {}
  @Post()
  async create(@Body() data: VisitorConvertedDTO){
    return this.visitorsConvertedsService.create(data);
  }

  @Get()
  async findAll() {
    return this.visitorsConvertedsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id:string) {
    return this.visitorsConvertedsService.findOne(id);
  }

  @Put(":id")
  async update (@Param("id") id:string, @Body() data: VisitorConvertedDTO) {
      return this.visitorsConvertedsService.update(id, data);
  }

  @Delete(":id")
  async delete (@Param("id") id:string) {
      return this.visitorsConvertedsService.delete(id);
  }

}
