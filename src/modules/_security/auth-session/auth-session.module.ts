import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { AuthSessionController } from './auth-session.controller';
import { AuthSessionService } from './auth-session.service';

@Module({
  controllers: [AuthSessionController],
  providers: [AuthSessionService, PrismaService],
  exports: [AuthSessionService],
})
export class AuthSessionModule {}
