import { Module } from '@nestjs/common';
import { AuthRecoveryService } from './auth-recovery.service';
import { AuthRecoveryController } from './auth-recovery.controller';
import { PrismaService } from 'src/databases/PrismaService';
import { PersonModule } from 'src/modules/_persons/person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [AuthRecoveryController],
  providers: [AuthRecoveryService, PrismaService],
})
export class AuthRecoveryModule {}
