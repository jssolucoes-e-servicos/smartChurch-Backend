import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { StudantOnLessonDTO } from 'src/modules/_ead-platform/studant-on-lesson/studant-on-lesson.dto';
import { RegisterDeleted, RegisterNotExists } from 'src/utils/results';

@Injectable()
export class StudantOnLessonService {
  constructor(private prisma: PrismaService) {}
  private _name = 'Studant on Lesson';

  async create(data: StudantOnLessonDTO) {
    try {
      const result = await this.prisma.studantOnLesson.create({
        data,
      });
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      return this.prisma.studantOnLesson.findMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      return this.prisma.studantOnLesson.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, data: StudantOnLessonDTO) {
    try {
      const DataExists = await this.prisma.studantOnLesson.findUnique({
        where: {
          id,
        },
      });
      if (!DataExists) {
        RegisterNotExists(this._name);
      }
      return await this.prisma.studantOnLesson.update({
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
      const DataExists = await this.prisma.studantOnLesson.findUnique({
        where: {
          id,
        },
      });
      if (!DataExists) {
        RegisterNotExists(this._name);
      }
      await this.prisma.studantOnLesson.delete({
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
