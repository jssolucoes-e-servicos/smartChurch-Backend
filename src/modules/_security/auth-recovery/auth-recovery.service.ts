import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { PersonService } from 'src/modules/_persons/person/person.service';
import { AuthRecoveryRequestInitialDTO } from 'src/modules/_security/auth-recovery/auth-recovery.dto';

@Injectable()
export class AuthRecoveryService {
  constructor(
    private prisma: PrismaService,
    private readonly personService: PersonService, //private readonly authSessionService: AuthSessionService, //private jwtService: JwtService
  ) {}

  async generate(data: AuthRecoveryRequestInitialDTO) {
    /*  const user = await this.personService.findByEmail(data.email);
    user.inRecovery = true;
    user.loginAttempts = 3;
    user.statsLogin = 'locked';
    await this.personService.update(user.id, user);
    const recoveryToken = await this.prisma.recoveryToken.create({
      data: {
        personId: user.id,
        token: 'banana',
      },
    });
    return recoveryToken; */
    return true;
  }

  async changePassword(data: AuthRecoveryRequestInitialDTO) {
    return true;
  }
}
