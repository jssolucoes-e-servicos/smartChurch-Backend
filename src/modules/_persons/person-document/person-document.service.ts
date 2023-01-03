import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { PersonDocumentDTO } from './person-document.dto';

@Injectable()
export class PersonDocumentService {
  constructor(private prisma: PrismaService){}

  async create(data:PersonDocumentDTO){
    const documentExists = await this.prisma.personDocument.findFirst({
      where: { 
        documentName: data.documentName
      }
    });
    if (documentExists) {
      throw new Error("Person Document already exixts");
    }
    let dataToInsert = { ...data }
    const personDocument = await this.prisma.personDocument.create({
      data: dataToInsert
    })

    return personDocument;
  }

  async findAll(personId: string) {
    return this.prisma.personDocument.findMany({where: { personId:personId}});
  }

  async findOne(id:string) {
    return this.prisma.personDocument.findUnique({where:{id}});
  }

  async update(id:string, data:PersonDocumentDTO){
    const personDocumentExists = await this.prisma.personDocument.findUnique({
      where: {
        id,
      }
    });
    if (!personDocumentExists) {
      throw new Error("Person document does not exixts");
    }
    return await this.prisma.personDocument.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const personDocumentExists = await this.prisma.personDocument.findUnique({
      where: {
        id,
      }
    });
    if (!personDocumentExists) {
      throw new Error("Person document does not exixts");
    }
    return await this.prisma.personDocument.delete({
       where: {
        id,
      }
    })
  }


}
