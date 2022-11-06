import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import {ChurchDTO} from './church.dto';

@Injectable()
export class ChurchService {
   constructor(private prisma: PrismaService){}

  async create(data:ChurchDTO){
    const church = await this.prisma.church.create({
      data,
    })

    return church;
  }

  async findAll() {
    return this.prisma.church.findMany();
  }

  async findOne(id:string) {
    return this.prisma.church.findUnique({where:{id}});
  }

  async update(id:string, data:ChurchDTO){
    const churchExists = await this.prisma.church.findUnique({
      where: {
        id,
      }
    });
    if (!churchExists) {
      throw new Error("Cell does not exixts");
    }
    return await this.prisma.church.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const churchExists = await this.prisma.church.findUnique({
      where: {
        id,
      }
    });
    if (churchExists) {
      throw new Error("User does not exixts");
    }
    return await this.prisma.church.delete({
       where: {
        id,
      }
    })
  }
}

