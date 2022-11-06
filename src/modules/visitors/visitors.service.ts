import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { VisitorDTO } from './visitors.dto';
@Injectable()
export class VisitorsService {
  
  constructor(private prisma: PrismaService){}

  async create(data:VisitorDTO){
    const visitor = await this.prisma.visitor.create({
      data,
    })
    return visitor;
  }

  async findAll() {
    return this.prisma.visitor.findMany();
  }

  async findOne(id:string) {
    return this.prisma.visitor.findUnique({where:{id}});
  }

  async update(id:string, data:VisitorDTO){
    const visitorExists = await this.prisma.visitor.findUnique({
      where: {
        id,
      }
    });
    if (!visitorExists) {
      throw new Error("Cell does not exixts");
    }
    return await this.prisma.visitor.update({
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
  
