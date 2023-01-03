import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { CourseDTO } from './course.dto';
@Injectable()
export class CourseService { 
  constructor(private prisma: PrismaService){}

  async create(data:CourseDTO){
    const church = await this.prisma.course.create({
      data,
    })

    return church;
  }

  async findAll() {
    return this.prisma.course.findMany();
  }

  async findOne(id:string) {
    return this.prisma.course.findUnique({where:{id}});
  }

  async update(id:string, data:CourseDTO){
    const churchExists = await this.prisma.course.findUnique({
      where: {
        id,
      }
    });
    if (!churchExists) {
      throw new Error("Cell does not exixts");
    }
    return await this.prisma.course.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const churchExists = await this.prisma.course.findUnique({
      where: {
        id,
      }
    });
    if (churchExists) {
      throw new Error("User does not exixts");
    }
    return await this.prisma.course.delete({
       where: {
        id,
      }
    })
  }
}
