import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { RegisterDeleted, RegisterNotExists } from 'src/utils/results';
import { CourseGroupDTO } from './course-group.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class CourseGroupService {
  constructor(private prisma: PrismaService) {}
  private _name = 'Course Group';

  async create(data: CourseGroupDTO) {
    try {
      const result = await this.prisma.courseGroup.create({
        data,
      });
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      return this.prisma.courseGroup.findMany({
        select: {
          id: true,
          name: true,
          createdAt: true,
          Course: true,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      return this.prisma.courseGroup.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
          createdAt: true,
          Course: true,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, data: CourseGroupDTO) {
    try {
      const DataExists = await this.prisma.courseGroup.findUnique({
        where: {
          id,
        },
      });
      if (!DataExists) {
        RegisterNotExists(this._name);
      }
      return await this.prisma.courseGroup.update({
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
      const DataExists = await this.prisma.courseGroup.findUnique({
        where: {
          id,
        },
      });
      if (!DataExists) {
        RegisterNotExists(this._name);
      }
      await this.prisma.courseGroup.delete({
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
