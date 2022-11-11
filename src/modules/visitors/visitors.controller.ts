import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards  } from '@nestjs/common';
import { VisitorDTO } from 'src/modules/visitors/visitors.dto';
import { VisitorsService } from './visitors.service';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('visitors')
export class VisitorsController {
  constructor(private readonly visitorsService: VisitorsService) {}
  @Post()
  async create(@Body() data: VisitorDTO){
    return this.visitorsService.create(data);
  }

  @Get()
  async findAll() {
    return this.visitorsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id:string) {
    return this.visitorsService.findOne(id);
  }

  @Put(":id")
  async update (@Param("id") id:string, @Body() data: VisitorDTO) {
      return this.visitorsService.update(id, data);
  }

  @Delete(":id")
  async delete (@Param("id") id:string) {
      return this.visitorsService.delete(id);
  }

}
