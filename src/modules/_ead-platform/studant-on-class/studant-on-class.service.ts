import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { StudantOnClassDTO } from 'src/modules/_ead-platform/studant-on-class/studant-on-class.dto';
import { RegisterDeleted, RegisterNotExists } from 'src/utils/results';

@Injectable()
export class StudantOnClassService {
  constructor(private prisma: PrismaService) {}
  private _name = 'Studant on Croup';

  async create(data: StudantOnClassDTO) {
    try {
      const result = await this.prisma.studantOnClass.create({
        data,
      });
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      return this.prisma.studantOnClass.findMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      return this.prisma.studantOnClass.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOneByClass(id: string) {
    try {
      return this.prisma.courseClass.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
          active: true,
          createdAt: true,
          course: {
            select: {
              name: true,
              image: true,
              CourseLesson: {
                select: {
                  id: true,
                  name: true,
                  description: true,
                  isVideo: true,
                  type: true,
                  active: true,
                  StudantOnLesson: {
                    select: {
                      id: true,
                    },
                  },
                  LessonFile: {
                    select: {
                      id: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOneByStudant(id: string) {
    try {
      return this.prisma.studantOnClass.findMany({
        where: {
          studantId: id,
        },
        select: {
          id: true,
          createdAt: true,
          class: {
            select: {
              id: true,
              name: true,
              createdAt: true,
              course: {
                select: {
                  id: true,
                  name: true,
                  slug: true,
                  CourseLesson: {
                    select: {
                      id: true,
                      description: true,
                      name: true,
                      isVideo: true,
                      type: true,
                      StudantOnLesson: {
                        select: {
                          id: true,
                        },
                      },
                      LessonFile: {
                        select: {
                          id: true,
                          format: true,
                          name: true,
                          url: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, data: StudantOnClassDTO) {
    try {
      const DataExists = await this.prisma.studantOnClass.findUnique({
        where: {
          id,
        },
      });
      if (!DataExists) {
        RegisterNotExists(this._name);
      }
      return await this.prisma.studantOnClass.update({
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
      const DataExists = await this.prisma.studantOnClass.findUnique({
        where: {
          id,
        },
      });
      if (!DataExists) {
        RegisterNotExists(this._name);
      }
      await this.prisma.studantOnClass.delete({
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
