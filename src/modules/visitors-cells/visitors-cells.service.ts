import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { VisitorCellDTO } from './visitors-cells.dto';
@Injectable()
export class VisitorsCellsService {
  
  constructor(private prisma: PrismaService){}

  async create(data:VisitorCellDTO){
    const visitor = await this.prisma.visitorCell.create({
      data,
    })
    return visitor;
  }

  async findAll() {
    return this.prisma.visitorCell.findMany();
  }

  async findOne(id:string) {
    return this.prisma.visitorCell.findUnique({where:{id}});
  }

  async update(id:string, data:VisitorCellDTO){
    const visitorExists = await this.prisma.visitorCell.findUnique({
      where: {
        id,
      }
    });
    if (!visitorExists) {
      throw new Error("Cell does not exixts");
    }
    return await this.prisma.visitorCell.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const visitorExists = await this.prisma.visitorCell.findUnique({
      where: {
        id,
      }
    });
    if (!visitorExists) {
      throw new Error("User does not exixts");
    }
    return await this.prisma.visitorCell.delete({
       where: {
        id,
      }
    })
  }
}
  