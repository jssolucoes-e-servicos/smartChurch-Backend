import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { RegisterNotExists } from 'src/utils/results';
import { CourseGroupDTO } from './course-group.dto';

@Injectable()
export class CourseGroupService { 
  constructor(private prisma: PrismaService){}

  async create(data:CourseGroupDTO){
    const result = await this.prisma.courseGroup.create({
      data,
    })

    return result;
  }

  async findAll() {
    return this.prisma.courseGroup.findMany();
  }

  async findOne(id:string) {
    return this.prisma.courseGroup.findUnique({where:{id}});
  }

  async update(id:string, data:CourseGroupDTO){
    const DataExists = await this.prisma.courseGroup.findUnique({
      where: {
        id,
      }
    });
    if (!DataExists) {
      RegisterNotExists('Course Group');
    }
    return await this.prisma.courseGroup.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const DataExists = await this.prisma.courseGroup.findUnique({
      where: {
        id,
      }
    });
    if (DataExists) {
      RegisterNotExists('Course Group');
    }
    return await this.prisma.courseGroup.delete({
       where: {
        id,
      }
    })
  }
}
