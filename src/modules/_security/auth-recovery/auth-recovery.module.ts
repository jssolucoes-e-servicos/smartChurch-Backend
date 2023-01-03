import { Module } from '@nestjs/common';
import { AuthRecoveryService } from './auth-recovery.service';
import { AuthRecoveryController } from './auth-recovery.controller';

@Module({
  controllers: [AuthRecoveryController],
  providers: [AuthRecoveryService]
})
export class AuthRecoveryModule {}
