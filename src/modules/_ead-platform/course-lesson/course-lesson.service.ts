import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { CourseLessonDTO } from 'src/modules/_ead-platform/course-lesson/course-lesson.dto';
import { RegisterDeleted, RegisterNotExists } from 'src/utils/results';

@Injectable()
export class CourseLessonService {
  constructor(private prisma: PrismaService) {}
  private _name = 'Course Lesson';

  async create(data: CourseLessonDTO) {
    try {
      const result = await this.prisma.courseLesson.create({
        data,
      });
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      return this.prisma.courseLesson.findMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      return this.prisma.courseLesson.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, data: CourseLessonDTO) {
    try {
      const DataExists = await this.prisma.courseLesson.findUnique({
        where: {
          id,
        },
      });
      if (!DataExists) {
        RegisterNotExists(this._name);
      }
      return await this.prisma.courseLesson.update({
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
      const DataExists = await this.prisma.courseLesson.findUnique({
        where: {
          id,
        },
      });
      if (!DataExists) {
        RegisterNotExists(this._name);
      }
      await this.prisma.courseLesson.delete({
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
