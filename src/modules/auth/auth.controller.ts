import { Controller, HttpCode, HttpStatus, Post, Body,UseGuards, Request } from '@nestjs/common';
import { AuthDTO } from 'src/modules/auth/auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    
    
    return req.user;
  }
  
}
