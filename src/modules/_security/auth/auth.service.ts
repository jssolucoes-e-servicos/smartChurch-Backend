import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { PersonService } from 'src/modules/_persons/person/person.service';
import { AuthSessionService } from '../auth-session/auth-session.service';
import { AuthSessionDTO, UserResponseType } from './auth.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly personService: PersonService,
    private readonly authSessionService: AuthSessionService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userEmail: string, userPassword: string) {
    const person = await this.personService.findByEmailToLogin(userEmail);
    if (person) {
      const isPasswordValid = await compare(userPassword, person.password);
      if (isPasswordValid) {
        return {
          ...person,
          password: undefined,
        };
      }
    }
    return null;
  }

  async login(user: UserResponseType, sessionData: AuthSessionDTO) {
    const session = await this.authSessionService.create(sessionData);
    const payload = { email: user.email, sub: user.id, session: session.id };
    const access_token = this.jwtService.sign(payload);
    const sessionToUpdate = {
      ...session,
      id: undefined,
      token: access_token,
    };
    await this.authSessionService.update(session.id, sessionToUpdate);
    return {
      access_token: user.TwoFactorAuthenticationActive ? null : access_token,
      user: user,
      session: session.id,
      TFA: user.TwoFactorAuthenticationActive,
    };
  }
}
