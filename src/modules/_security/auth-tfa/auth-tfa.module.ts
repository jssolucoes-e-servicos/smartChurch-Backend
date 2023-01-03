import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { AuthTfaController } from './auth-tfa.controller';
import { AuthTfaService } from './auth-tfa.service';

@Module({
  controllers: [AuthTfaController],
  providers: [AuthTfaService, PrismaService],
  exports: [ AuthTfaService ],
})
export class AuthTfaModule {}
