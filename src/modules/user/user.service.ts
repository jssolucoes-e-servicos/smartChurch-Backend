import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { UserDTO } from './user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}

  async create(data:UserDTO){
    const userExists = await this.prisma.user.findFirst({
      where: { 
        email: data.email
      }
    });
    if (userExists) {
      throw new Error("User already exixts");
      
    }

    const dataToInsert = {
      ...data,
      password: await hash(data.password, 10),
    }
    const user = await this.prisma.user.create({
      data: dataToInsert
    })

    return {
      ...user,
      password : undefined
    };
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({where:{email:email}});
    return user;
  }

  async findOne(id:string) {
    return this.prisma.user.findUnique({where:{id}});
  }

  async update(id:string, data:UserDTO){
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      }
    });
    if (!userExists) {
      throw new Error("User does not exixts");
    }
    return await this.prisma.user.update({
      data,
      where: {
        id,
      }
    })
  }

  async delete(id:string){
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      }
    });
    if (!userExists) {
      throw new Error("User does not exixts");
    }
    return await this.prisma.user.delete({
       where: {
        id,
      }
    })
  }


}
