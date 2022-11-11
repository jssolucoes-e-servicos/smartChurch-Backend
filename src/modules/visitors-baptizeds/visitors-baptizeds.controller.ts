import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards  } from '@nestjs/common';
import { VisitorBaptizedDTO } from 'src/modules/visitors-baptizeds/visitors-baptizeds.dto';
import { VisitorsBaptizedsService } from './visitors-baptizeds.service';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('visitors-baptizeds')
export class VisitorsBaptizedsController {
  constructor(private readonly visitorsBaptizedsService: VisitorsBaptizedsService) {}
  @Post()
  async create(@Body() data: VisitorBaptizedDTO){
    return this.visitorsBaptizedsService.create(data);
  }

  @Get()
  async findAll() {
    return this.visitorsBaptizedsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id:string) {
    return this.visitorsBaptizedsService.findOne(id);
  }

  @Put(":id")
  async update (@Param("id") id:string, @Body() data: VisitorBaptizedDTO) {
      return this.visitorsBaptizedsService.update(id, data);
  }

  @Delete(":id")
  async delete (@Param("id") id:string) {
      return this.visitorsBaptizedsService.delete(id);
  }

}
