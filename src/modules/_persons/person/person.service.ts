import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/databases/PrismaService';
import { PersonDTO } from './person.dto';

type PathItemType = {
  field: 'TwoFactorAuthenticationActive';
  value: 'true';
};

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  async create(data: PersonDTO) {
    const emailExists = await this.prisma.person.findFirst({
      where: {
        email: data.email,
      },
    });
    if (emailExists) {
      throw new Error('Person already exixts');
    }
    let dataToInsert = { ...data };
    if (data.password) {
      dataToInsert = {
        ...data,
        password: await hash(data.password, 10),
      };
    }
    const person = await this.prisma.person.create({
      data: dataToInsert,
    });

    return {
      ...person,
      password: undefined,
    };
  }

  async findAll() {
    return this.prisma.person.findMany({
      select: {
        id: true,
        name: true,
        genre: true,
        birth: true,
        photo: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        CellsNetwork: {
          select: {
            id: true,
            image: true,
            name: true,
            color: true,
          },
        },
        CourseEvaluationProgress: {
          select: {
            id: true,
            stap: true,
            createdAt: true,
            evaluation: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        StudantOnClass: {
          select: {
            class: {
              select: {
                id: true,
                name: true,
                course: {
                  select: {
                    id: true,
                    name: true,
                    image: true,
                  },
                },
              },
            },
          },
        },
        Cell: {
          select: {
            id: true,
            name: true,
            color: true,
            image: true,
            leader: {
              select: {
                genre: true,
                name: true,
              },
            },
            cellsNetwork: {
              select: {
                name: true,
                color: true,
                image: true,
                supervisor: {
                  select: {
                    genre: true,
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.person.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        genre: true,
        birth: true,
        photo: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        PersonDocument: true,
        Teacher: {
          select: {
            bio: true,
          },
        },
        CellsNetwork: {
          select: {
            id: true,
            image: true,
            name: true,
            color: true,
          },
        },
        CourseEvaluationProgress: {
          select: {
            id: true,
            stap: true,
            createdAt: true,
            evaluation: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        StudantOnClass: {
          select: {
            class: {
              select: {
                id: true,
                name: true,
                course: {
                  select: {
                    id: true,
                    name: true,
                    image: true,
                  },
                },
              },
            },
          },
        },
        Cell: {
          select: {
            id: true,
            name: true,
            color: true,
            image: true,
            leader: {
              select: {
                genre: true,
                name: true,
              },
            },
            cellsNetwork: {
              select: {
                name: true,
                color: true,
                image: true,
                supervisor: {
                  select: {
                    genre: true,
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async findByEmail(email: string): Promise<PersonDTO> {
    const person = await this.prisma.person.findUnique({ where: { email } });
    return person;
  }

  async findByEmailToLogin(email: string) {
    const person = await this.prisma.person.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        genre: true,
        birth: true,
        photo: true,
        email: true,
        password: true,
        loginAttempts: true,
        statsLogin: true,
        inRecovery: true,
        isAdmin: true,
        TwoFactorAuthenticationActive: true,
        PersonsOnChurches: {
          where: {
            active: true,
          },
          select: {
            church: {
              select: {
                id: true,
                name: true,
                fantasy: true,
                image: true,
              },
            },
            permitChurch: true,
            permitEAD: true,
            permitPortal: true,
            dizimist: true,
            member: true,
            singnedAt: true,
          },
        },
      },
    });
    return person;
  }

  async update(id: string, data: PersonDTO) {
    const personExists = await this.prisma.person.findUnique({
      where: {
        id,
      },
    });
    if (!personExists) {
      throw new Error('Person does not exixts');
    }
    let dataToUpdate = { ...data };
    if (data.password) {
      dataToUpdate = {
        ...data,
        password: await hash(data.password, 10),
      };
    }
    return await this.prisma.person.update({
      data: dataToUpdate,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const personExists = await this.prisma.person.findUnique({
      where: {
        id,
      },
    });
    if (!personExists) {
      throw new Error('User does not exixts');
    }
    return await this.prisma.person.delete({
      where: {
        id,
      },
    });
  }
}
