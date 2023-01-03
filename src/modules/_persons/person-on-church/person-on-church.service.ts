import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { PersonOnChurchDTO } from './person-on-church.dto';

@Injectable()
export class PersonOnChurchService {
  constructor(private prisma: PrismaService){}

  async create(data:PersonOnChurchDTO){
    const dataExists = await this.prisma.personsOnChurches.findFirst({
      where: { 
        personId: data.personId,
        churchId: data.churchId
      }
    });
    if (dataExists) {
      throw new Error("Person already exixts in this church");
    }
    let dataToInsert = { ...data }
    const personsOnChurches = await this.prisma.personsOnChurches.create({
      data: dataToInsert
    })

    return personsOnChurches;
  }

  async findAll() {
    return this.prisma.personsOnChurches.findMany();
  }

  async findbyChurch(churchId: string) {
    return this.prisma.personsOnChurches.findMany({where: { churchId:churchId}});
  }

  async findbyPerson(personId: string) {
    return this.prisma.personsOnChurches.findMany({where: { personId:personId}});
  }


  async findOne(id:string) {
    return this.prisma.personsOnChurches.findUnique({where:{id}});
  }

  async update(id:string, data:PersonOnChurchDTO){
    const dataExists = await this.prisma.personsOnChurches.findUnique({
      where: {
        id,
      }
    });
    if (!dataExists) {
      throw new Error("Person on Church does not exixts");
    }
    return await this.prisma.personsOnChurches.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const dataExists = await this.prisma.personsOnChurches.findUnique({
      where: {
        id,
      }
    });
    if (!dataExists) {
      throw new Error("Person on Church does not exixts");
    }
    return await this.prisma.personsOnChurches.delete({
       where: {
        id,
      }
    })
  }


}
