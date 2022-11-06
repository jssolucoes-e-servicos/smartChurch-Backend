import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}

  async create(data:UserDTO){
    const userExists = await this.prisma.user.findFirst({
      where: { 
        email: data.email
      }
    })
    if (userExists) {
      throw new Error("User already exixts");
      
    }
    const user = await this.prisma.user.create({
      data
    })

    return user;
  }
}
