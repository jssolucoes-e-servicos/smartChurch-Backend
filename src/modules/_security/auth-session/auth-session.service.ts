import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { AuthSessionDTO } from 'src/modules/_security/auth-session/auth-session.dto';

@Injectable()
export class AuthSessionService {
  constructor(private prisma: PrismaService) {}

  async all() {
    return await this.prisma.session.findMany({
      select: {
        app: true,
        createdAt: true,
        platform: true,
        ipClient: true,
        userAgent: true,
        user: {
          select: {
            email: true,
            name: true,
            genre: true,
            photo: true,
          },
        },
      },
    });
  }

  async show(id: string) {
    return await this.prisma.session.findUnique({
      where: { id },
      select: {
        app: true,
        createdAt: true,
        platform: true,
        ipClient: true,
        userAgent: true,
        user: {
          select: {
            email: true,
            name: true,
            genre: true,
            photo: true,
          },
        },
      },
    });
  }

  async findByUser(userId: string, pStatus: boolean | null = null) {
    const whereClausure =
      pStatus === null ? { userId } : { userId, active: pStatus };
    return await this.prisma.session.findMany({
      where: whereClausure,
      select: {
        app: true,
        createdAt: true,
        platform: true,
        ipClient: true,
        userAgent: true,
        user: {
          select: {
            email: true,
            name: true,
            genre: true,
            photo: true,
          },
        },
      },
    });
  }

  async findByApp(app: string, pStatus: boolean | null = null) {
    const whereClausure = pStatus === null ? { app } : { app, active: pStatus };
    return await this.prisma.session.findMany({
      where: whereClausure,
      select: {
        app: true,
        createdAt: true,
        platform: true,
        ipClient: true,
        userAgent: true,
        user: {
          select: {
            email: true,
            name: true,
            genre: true,
            photo: true,
          },
        },
      },
    });
  }

  async closeAllSessionsUser(user: string) {
    return await this.prisma.session.updateMany({
      data: {
        active: false,
        token: '',
      },
      where: {
        userId: user,
      },
    });
  }

  async closeAllSessionsUserByApp(userId: string, app: string) {
    return await this.prisma.session.updateMany({
      data: {
        active: false,
        token: '',
      },
      where: {
        userId,
        app,
      },
    });
  }

  async closeAllMasterByApp(app: string) {
    return await this.prisma.session.updateMany({
      data: {
        active: false,
        token: '',
      },
      where: {
        app,
      },
    });
  }

  async create(data: AuthSessionDTO) {
    return await this.prisma.session.create({ data });
  }

  async update(id: string, data: AuthSessionDTO) {
    return await this.prisma.session.update({
      data,
      where: {
        id: id,
      },
    });
  }
}
