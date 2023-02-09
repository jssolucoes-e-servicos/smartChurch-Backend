import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as generateCode from 'src/utils/generateCode';
import * as speakeasy from 'speakeasy';
import { PrismaService } from 'src/databases/PrismaService';
import {
  TfaActivateRequestType,
  TfaVerifyRequestType,
  TfaConfirmActivateRequestType,
} from './auth-tfa.dto';
import { PersonService } from 'src/modules/_persons/person/person.service';

@Injectable()
export class AuthTfaService {
  constructor(
    private prisma: PrismaService,
    private readonly personService: PersonService,
  ) {}

  async activate(data: TfaActivateRequestType) {
    try {
      const userTFA = await this.prisma.twoFactorAuthentication.findFirst({
        where: {
          personId: data.user,
        },
      });
      if (userTFA) throw new Error('Autenticação de 2 fatares já estava ativa');
      const secret = speakeasy.generateSecret();
      await this.prisma.twoFactorAuthentication.create({
        data: {
          personId: data.user,
          ascii: secret.ascii,
          hex: secret.hex,
          base32: secret.base32,
          otpauth_url: secret.otpauth_url,
          recoveryCodeOne: generateCode.handle(10),
          recoveryCodeTwo: generateCode.handle(10),
          recoveryCodeThree: generateCode.handle(10),
          recoveryCodeFour: generateCode.handle(10),
          recoveryCodeFive: generateCode.handle(10),
          recoveryCodeSix: generateCode.handle(10),
          recoveryCodeSeven: generateCode.handle(10),
          recoveryCodeEigth: generateCode.handle(10),
          recoveryCodeNine: generateCode.handle(10),
          recoveryCodeTen: generateCode.handle(10),
        },
      });
      const user = await this.prisma.person.findFirst({
        where: {
          id: data.user,
        },
      });
      await this.personService.update(user.id, {
        ...user,
        id: undefined,
        TwoFactorAuthenticationActive: true,
      });
      return true;
    } catch (error) {
      throw error;
    }
  }

  async confirmActivate(data: TfaConfirmActivateRequestType) {
    const tfaDb = await this.prisma.twoFactorAuthentication.findFirst({
      where: {
        personId: data.user,
      },
    });
    if (tfaDb === null) {
      return false;
    } else {
      const verified = speakeasy.totp.verify({
        secret: tfaDb.ascii,
        encoding: 'base32',
        token: data.token,
      });
      return verified;
    }
  }

  async verify(data: TfaVerifyRequestType) {
    const sessionData = await this.prisma.session.findUnique({
      where: { id: data.session },
      select: {
        user: true,
      },
    });
    const tfaDb = await this.prisma.twoFactorAuthentication.findFirst({
      where: {
        personId: sessionData.user.id,
      },
    });
    if (tfaDb === null) {
      return false;
    } else {
      const verified = speakeasy.totp.verify({
        secret: tfaDb.ascii,
        encoding: 'base32',
        token: data.token,
      });
      return verified;
    }
  }
}
