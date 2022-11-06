import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { compare } from 'bcrypt';
//import { hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService){}

  async validateUser(email:string, password:string){
    const user = await this.userService.findByEmail(email);
    if (user){
      const isPasswordValid = await compare(password, user.password);
      if (isPasswordValid){
        return {
          ...user,
          password: undefined,
        }
      }
    }
    throw new Error('Email or password provided is incorrect.')
  }
}
