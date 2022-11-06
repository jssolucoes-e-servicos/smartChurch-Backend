import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { PeopleDTO } from './people.dto';

@Injectable()
export class PeopleService {
  constructor(private prisma: PrismaService){}

  async create(data:PeopleDTO){
    const person = await this.prisma.person.create({
      data,
    })

    return person;
  }

  async findAll() {
    return this.prisma.person.findMany();
  }

  async findOne(id:string) {
    return this.prisma.person.findUnique({where:{id}});
  }

  async update(id:string, data:PeopleDTO){
    const personExists = await this.prisma.person.findUnique({
      where: {
        id,
      }
    });
    if (!personExists) {
      throw new Error("Person does not exixts");
    }
    return await this.prisma.person.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const personExists = await this.prisma.person.findUnique({
      where: {
        id,
      }
    });
    if (!personExists) {
      throw new Error("User does not exixts");
    }
    return await this.prisma.person.delete({
       where: {
        id,
      }
    })
  }


}
