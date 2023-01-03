import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { RegisterNotExists } from 'src/utils/results';
import { CellDTO } from './cell.dto';
@Injectable()
export class CellService {
  constructor(private prisma: PrismaService){}

  async create(data:CellDTO){
    const result = await this.prisma.cell.create({
      data,
    })

    return result;
  }

  async findAll() {
    return this.prisma.cell.findMany({
      where: {
        active: true
      },
      include: {
      leader: {
         select: {
              name: true,
              birth: true,
              genre: true,
              photo: true
            }
      },
      cellsNetwork: {
        include: {
          supervisor: {
            select: {
              name: true,
              birth: true,
              genre: true,
              photo: true
            }
          }
        }
      }
    }});
  }

  async findOne(id:string) {
    return this.prisma.cell.findUnique({where:{id}, include: {
      leader:{
         select: {
              name: true,
              birth: true,
              genre: true,
              photo: true
            }
      },
      cellsNetwork: {
        include: {
          supervisor: {
            select: {
              name: true,
              birth: true,
              genre: true,
              photo: true,
              }
          }
        }
      }
    }});
  }

  async update(id:string, data:CellDTO){
    const dataExists = await this.prisma.cell.findUnique({
      where: {
        id,
      }
    });
    if (!dataExists) {
      RegisterNotExists('Cell')
    }
    return await this.prisma.cell.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const dataExists = await this.prisma.cell.findUnique({
      where: {
        id,
      }
    });
    if (!dataExists) {
       RegisterNotExists('Cell')
    }
    return await this.prisma.cell.delete({
       where: {
        id,
      }
    })
  }
}