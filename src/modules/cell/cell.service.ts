import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { CellDTO } from './cell.dto';
@Injectable()
export class CellService {
  constructor(private prisma: PrismaService){}

  async create(data:CellDTO){
    const cell = await this.prisma.cell.create({
      data,
    })

    return cell;
  }

  async findAll() {
    return this.prisma.cell.findMany();
  }

  async findOne(id:string) {
    return this.prisma.cell.findUnique({where:{id}});
  }

  async update(id:string, data:CellDTO){
    const cellExists = await this.prisma.cell.findUnique({
      where: {
        id,
      }
    });
    if (!cellExists) {
      throw new Error("Cell does not exixts");
    }
    return await this.prisma.cell.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const cellExists = await this.prisma.cell.findUnique({
      where: {
        id,
      }
    });
    if (!cellExists) {
      throw new Error("User does not exixts");
    }
    return await this.prisma.cell.delete({
       where: {
        id,
      }
    })
  }
}