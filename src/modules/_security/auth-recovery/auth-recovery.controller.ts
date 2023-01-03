import { Controller } from '@nestjs/common';
import { AuthRecoveryService } from './auth-recovery.service';

@Controller('auth-recovery')
export class AuthRecoveryController {
  constructor(private readonly authRecoveryService: AuthRecoveryService) {}
}
