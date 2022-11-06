import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/databases/PrismaService';
import {LocalStrategy} from  './strategies/local.strategy'
import { UserModule } from 'src/modules/user/user.module';
@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, LocalStrategy]
})
export class AuthModule {}
