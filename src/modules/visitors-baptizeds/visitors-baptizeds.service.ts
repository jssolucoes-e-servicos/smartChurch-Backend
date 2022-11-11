import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { VisitorBaptizedDTO } from './visitors-baptizeds.dto';
@Injectable()
export class VisitorsBaptizedsService {
  
  constructor(private prisma: PrismaService){}

  async create(data:VisitorBaptizedDTO){
    const visitor = await this.prisma.visitorBaptized.create({
      data,
    })
    return visitor;
  }

  async findAll() {
    return this.prisma.visitorBaptized.findMany({
      include: {
      cell:true,
      visitor:true
    }});
  }

  

  async findOne(id:string) {
    return this.prisma.visitorBaptized.findUnique({where:{id}});
  }

  async update(id:string, data:VisitorBaptizedDTO){
    const visitorExists = await this.prisma.visitorBaptized.findUnique({
      where: {
        id,
      }
    });
    if (!visitorExists) {
      throw new Error("Cell does not exixts");
    }
    return await this.prisma.visitorBaptized.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const visitorExists = await this.prisma.visitorBaptized.findUnique({
      where: {
        id,
      }
    });
    if (!visitorExists) {
      throw new Error("User does not exixts");
    }
    return await this.prisma.visitorBaptized.delete({
       where: {
        id,
      }
    })
  }
}
  