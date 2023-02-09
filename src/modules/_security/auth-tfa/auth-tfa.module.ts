import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { PersonModule } from 'src/modules/_persons/person/person.module';
import { AuthTfaController } from './auth-tfa.controller';
import { AuthTfaService } from './auth-tfa.service';

@Module({
  controllers: [AuthTfaController],
  providers: [AuthTfaService, PrismaService],
  exports: [AuthTfaService],
  imports: [PersonModule],
})
export class AuthTfaModule {}
