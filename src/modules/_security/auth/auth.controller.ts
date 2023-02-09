import {
  Controller,
  ForbiddenException,
  NotFoundException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthSessionDTO, UserResponseType, VinculeType } from './auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

type RequesrWithUserType = any & {
  user: UserResponseType;
};

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async loginWithOrigin(@Request() req: RequesrWithUserType) {
    const { app } = req.body;
    //Reject access in recovery
    if (req.user.inRecovery) {
      throw new ForbiddenException(
        `${req.user.name}, você está em processo de recuperação de senha.`,
      );
    }
    //Reject access in recovery
    if (req.user.statsLogin !== 'active') {
      throw new ForbiddenException(
        `${req.user.name}, seu acesso a plataforma não está liberado, procure o administrador de sua instituição.`,
      );
    }

    const churchesAprovedEAD = [];
    const churchesAprovedChuch = [];
    const churchesAprovedPortal = [];
    req.user.PersonsOnChurches.map((vincule: VinculeType) => {
      if (vincule.permitEAD === true) {
        churchesAprovedEAD.push(vincule);
      }
      if (vincule.permitChurch === true) {
        churchesAprovedChuch.push(vincule);
      }
      if (vincule.permitPortal === true) {
        churchesAprovedPortal.push(vincule);
      }
    });
    let ipClient =
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
    if (ipClient === '::1') {
      ipClient = 'localhost-dev-test';
    }

    const dataSession: AuthSessionDTO = {
      userId: req.user.id,
      userAgent: req.headers['user-agent'],
      ipClient: ipClient,
      app: app,
    };

    if (app === 'church') {
      if (churchesAprovedChuch.length <= 0) {
        throw new ForbiddenException(
          `${req.user.name}, você não tem acesso a aplicação: smartChurch - Sistema de Gestão, procure o administrador de sua instituição.`,
        );
      } else {
        return this.authService.login(req.user, dataSession);
      }
    } else if (app === 'ead') {
      if (churchesAprovedEAD.length <= 0) {
        throw new ForbiddenException(
          `${req.user.name}, você não tem acesso a aplicação: smartChurch - Plataforma de EAD, procure o administrador de sua instituição.`,
        );
      } else {
        return this.authService.login(req.user, dataSession);
      }
    } else if (app === 'portal') {
      if (churchesAprovedPortal.length <= 0) {
        throw new ForbiddenException(
          `${req.user.name}, você não tem acesso a aplicação: smartChurch - Portal do Membro, procure o administrador de sua instituição.`,
        );
      } else {
        return this.authService.login(req.user, dataSession);
      }
    } else {
      throw new NotFoundException('Aplicação não autorizada');
    }
  }
}
