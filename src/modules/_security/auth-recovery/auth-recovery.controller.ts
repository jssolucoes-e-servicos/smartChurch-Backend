import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthRecoveryRequestInitialDTO } from 'src/modules/_security/auth-recovery/auth-recovery.dto';
import { LocalAuthGuard } from 'src/modules/_security/auth/guard/local-auth.guard';
import { AuthRecoveryService } from './auth-recovery.service';

@Controller('api/auth/recovery')
export class AuthRecoveryController {
  constructor(private readonly authRecoveryService: AuthRecoveryService) {}

  @Post('/')
  @UseGuards(LocalAuthGuard)
  async generateToken(@Body() data: AuthRecoveryRequestInitialDTO) {
    return await this.authRecoveryService.generate(data);
  }
}
