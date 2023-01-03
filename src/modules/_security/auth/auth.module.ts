import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/databases/PrismaService';
import { PersonModule } from 'src/modules/_persons/person/person.module';
import { AuthSessionService } from 'src/modules/_security/auth-session/auth-session.service';
import { AuthTfaService } from 'src/modules/_security/auth-tfa/auth-tfa.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    PersonModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: 0 }, //3600s
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthTfaService,
    AuthSessionService,
    PrismaService,
    LocalStrategy,
    JwtStrategy
  ],
  exports: [ AuthService ],
})
export class AuthModule {}
