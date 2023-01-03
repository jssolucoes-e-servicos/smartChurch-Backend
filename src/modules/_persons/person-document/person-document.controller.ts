
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/_security/auth/guard/jwt-auth.guard';
import { PersonDocumentDTO } from './person-document.dto';
import { PersonDocumentService } from './person-document.service';

@UseGuards(JwtAuthGuard)
@Controller('person-document')
export class PersonDocumentController {
  constructor(private readonly personDocumentService: PersonDocumentService) {}
  @Post()
  async create(@Body() data: PersonDocumentDTO){
    return this.personDocumentService.create(data);
  }

  @Get(":id")
  async findAll(@Param("id") personId: string) {
    return this.personDocumentService.findAll(personId);
  }

  @Get(":id")
  async findOne(@Param("id") id:string) {
    return this.personDocumentService.findOne(id);
  }

  @Put(":id")
  async update (@Param("id") id:string, @Body() data: PersonDocumentDTO) {
      return this.personDocumentService.update(id, data);
  }

  @Delete(":id")
  async delete (@Param("id") id:string) {
      return this.personDocumentService.delete(id);
  }

}
