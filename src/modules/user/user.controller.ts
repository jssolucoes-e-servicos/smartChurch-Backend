import { Controller, Post, Body } from '@nestjs/common';
import { UserDTO } from 'src/modules/user/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: UserDTO){
    return this.userService.create(data);
  }
}
