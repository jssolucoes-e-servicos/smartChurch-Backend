import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { VisitorConvertedDTO } from './visitors-converteds.dto';
@Injectable()
export class VisitorsConvertedsService {
  
  constructor(private prisma: PrismaService){}

  async create(data:VisitorConvertedDTO){
    const visitor = await this.prisma.visitorConverted.create({
      data,
    })
    return visitor;
  }

  async findAll() {
    return this.prisma.visitorConverted.findMany();
  }

  async findOne(id:string) {
    return this.prisma.visitorConverted.findUnique({where:{id}});
  }

  async update(id:string, data:VisitorConvertedDTO){
    const visitorExists = await this.prisma.visitorConverted.findUnique({
      where: {
        id,
      }
    });
    if (!visitorExists) {
      throw new Error("Cell does not exixts");
    }
    return await this.prisma.visitorConverted.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const visitorExists = await this.prisma.visitor.findUnique({
      where: {
        id,
      }
    });
    if (!visitorExists) {
      throw new Error("User does not exixts");
    }
    return await this.prisma.visitor.delete({
       where: {
        id,
      }
    })
  }
}
  