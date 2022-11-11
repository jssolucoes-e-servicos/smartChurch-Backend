import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ){}

  async validateUser(userEmail:string, userPassword:string){
    const user = await this.userService.findByEmail(userEmail);
    if (user){
      const isPasswordValid = await compare(userPassword, user.password);
      if (isPasswordValid){
        return {
          ...user,
          password: undefined,
        }
      }
    }
    return null;
  }

   async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: user
    };
  }
}
