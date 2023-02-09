import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { CourseClassDTO } from 'src/modules/_ead-platform/course-class/course-class.dto';
import { RegisterDeleted, RegisterNotExists } from 'src/utils/results';

@Injectable()
export class CourseClassService {
  constructor(private prisma: PrismaService) {}
  private _name = 'Course Class';

  async create(data: CourseClassDTO) {
    try {
      const result = await this.prisma.courseClass.create({
        data,
      });
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      return this.prisma.courseClass.findMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      return this.prisma.courseClass.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, data: CourseClassDTO) {
    try {
      const DataExists = await this.prisma.courseClass.findUnique({
        where: {
          id,
        },
      });
      if (!DataExists) {
        RegisterNotExists(this._name);
      }
      return await this.prisma.courseClass.update({
        data,
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string) {
    try {
      const DataExists = await this.prisma.courseClass.findUnique({
        where: {
          id,
        },
      });
      if (!DataExists) {
        RegisterNotExists(this._name);
      }
      await this.prisma.courseClass.delete({
        where: {
          id,
        },
      });
      return RegisterDeleted(this._name);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
