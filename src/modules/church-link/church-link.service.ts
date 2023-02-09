import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { ChurchLinkDTO } from './church-link.dto';

@Injectable()
export class ChurchLinkService {
  constructor(private prisma: PrismaService) {}

  async create(data: ChurchLinkDTO) {
    const churchLink = await this.prisma.churchLink.create({
      data,
    });

    return churchLink;
  }

  async findAll() {
    return this.prisma.churchLink.findMany();
  }

  async findOne(id: string) {
    return this.prisma.churchLink.findUnique({ where: { id } });
  }

  async update(id: string, data: ChurchLinkDTO) {
    const dataExists = await this.prisma.churchLink.findUnique({
      where: {
        id,
      },
    });
    if (!dataExists) {
      throw new Error('Cell does not exixts');
    }
    return await this.prisma.churchLink.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const dataxists = await this.prisma.churchLink.findUnique({
      where: {
        id,
      },
    });
    if (dataxists) {
      throw new Error('User does not exixts');
    }
    return await this.prisma.churchLink.delete({
      where: {
        id,
      },
    });
  }
}
