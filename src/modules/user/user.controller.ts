import { Controller, Post, Body, Get, Put, Delete, Param, UseGuards  } from '@nestjs/common';
import { UserDTO } from 'src/modules/user/user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: UserDTO){
    return this.userService.create(data);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id:string) {
    return this.userService.findOne(id);
  }

  @Put(":id")
  async update (@Param("id") id:string, @Body() data: UserDTO) {
      return this.userService.update(id, data);
  }

  @Delete(":id")
  async delete (@Param("id") id:string) {
      return this.userService.delete(id);
  }

}
