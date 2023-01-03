import { Controller } from '@nestjs/common';
import { AuthSessionService } from './auth-session.service';

@Controller('auth-session')
export class AuthSessionController {
  constructor(private readonly authSessionService: AuthSessionService) {}
}
