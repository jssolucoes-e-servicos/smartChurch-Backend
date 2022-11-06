import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { CellsNetworkDTO } from './cells-network.dto';

@Injectable()
export class CellsNetworkService {
  constructor(private prisma: PrismaService){}

  async create(data:CellsNetworkDTO){
    const cellsNetwork = await this.prisma.cellsNetwork.create({
      data,
    })

    return cellsNetwork;
  }

  async findAll() {
    return this.prisma.cellsNetwork.findMany();
  }

  async findOne(id:string) {
    return this.prisma.cellsNetwork.findUnique({where:{id}});
  }

  async update(id:string, data:CellsNetworkDTO){
    const cellsNetworkExists = await this.prisma.cellsNetwork.findUnique({
      where: {
        id,
      }
    });
    if (!cellsNetworkExists) {
      throw new Error("Cell does not exixts");
    }
    return await this.prisma.cellsNetwork.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const cellsNetworkExists = await this.prisma.cellsNetwork.findUnique({
      where: {
        id,
      }
    });
    if (cellsNetworkExists) {
      throw new Error("User does not exixts");
    }
    return await this.prisma.cellsNetwork.delete({
       where: {
        id,
      }
    })
  }
}
