import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { TeacherDTO } from 'src/modules/_ead-platform/teacher/teacher.dto';
import { RegisterDeleted, RegisterNotExists } from 'src/utils/results';

@Injectable()
export class TeacherService {
  constructor(private prisma: PrismaService) {}
  private _name = 'Teacher';

  async create(data: TeacherDTO) {
    try {
      const result = await this.prisma.teacher.create({
        data,
      });
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      return this.prisma.teacher.findMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      return this.prisma.teacher.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, data: TeacherDTO) {
    try {
      const DataExists = await this.prisma.teacher.findUnique({
        where: {
          id,
        },
      });
      if (!DataExists) {
        RegisterNotExists(this._name);
      }
      return await this.prisma.teacher.update({
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
      const DataExists = await this.prisma.teacher.findUnique({
        where: {
          id,
        },
      });
      if (!DataExists) {
        RegisterNotExists(this._name);
      }
      await this.prisma.teacher.delete({
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
