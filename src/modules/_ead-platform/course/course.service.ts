import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { RegisterDeleted, RegisterNotExists } from 'src/utils/results';
import { CourseDTO } from './course.dto';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}
  private _name = 'Course';

  async create(data: CourseDTO) {
    const church = await this.prisma.course.create({
      data,
    });

    return church;
  }

  async findAll() {
    return this.prisma.course.findMany({
      include: {
        curseGroup: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.course.findUnique({ where: { id } });
  }

  async update(id: string, data: CourseDTO) {
    const churchExists = await this.prisma.course.findUnique({
      where: {
        id,
      },
      include: {
        curseGroup: true,
      },
    });
    if (!churchExists) RegisterNotExists(this._name);

    return await this.prisma.course.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const churchExists = await this.prisma.course.findUnique({
      where: {
        id,
      },
    });
    if (!churchExists) RegisterNotExists(this._name);

    await this.prisma.course.delete({
      where: {
        id,
      },
    });
    return RegisterDeleted(this._name);
  }
}
