import { Injectable } from '@nestjs/common';
import { generateSecret } from 'speakeasy';
import { PrismaService } from 'src/databases/PrismaService';
import { TfaActivateRequestType, TfaVerifyRequestType } from './auth-tfa.dto';

@Injectable()
export class AuthTfaService {
  constructor( private prisma: PrismaService ){}

   async activate(data: TfaActivateRequestType) {
    const secret = generateSecret()
    return secret;
  }

  async verify(data: TfaVerifyRequestType) {
    const sessionData = await this.prisma.session.findUnique({
      where: {
        id: data.session
      },
      select: {
        token: true,
        userId: true,
        user: {
          select: {
            TwoFactorAuthentication: true
          }
        }
      }
    });
  }
}
