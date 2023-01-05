import { Injectable } from '@nestjs/common';
//import { generateSecret } from 'speakeasy';
import * as speakeasy from "speakeasy";
import { PrismaService } from 'src/databases/PrismaService';
import { TfaActivateRequestType, TfaVerifyRequestType } from './auth-tfa.dto';

@Injectable()
export class AuthTfaService {
  constructor( private prisma: PrismaService ){}

  async activate(data: TfaActivateRequestType) {
    const secret = speakeasy.generateSecret();

    return secret;
  }

  async confirmActivate(data: TfaVerifyRequestType) {




    const tfaDb = await this.prisma.twoFactorAuthentication.findFirst({
      where: {
        personId: data.user
      }
    });
    if (tfaDb === null) {
      return false
    } else {

    }
    const verified = speakeasy.totp.verify({
      secret,
      encoding: 'base32',
      token: data.token
    });
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
            TwoFactorAuthentication: {
              select: {
                ascii: true,
                otpauth_url: true
              }
            }
          }
        }
      }
    });

    let ascii = sessionData.user.TwoFactorAuthentication.ascii;
    const verified = speakeasy.totp.verify({
      secret:  ascii,
      encoding: 'ascii',
      token: data.token
    });


  }
}
