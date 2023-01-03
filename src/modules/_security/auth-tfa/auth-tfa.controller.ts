import { Body, Controller, ForbiddenException, Post } from '@nestjs/common';
import { TfaActivateRequestType, TfaVerifyRequestType } from 'src/modules/_security/auth-tfa/auth-tfa.dto';
import { AuthTfaService } from './auth-tfa.service';

@Controller('auth-tfa')
export class AuthTfaController {
  constructor(private readonly _authTfaService: AuthTfaService) {}

  @Post("activate")
  async activate(@Body() data:TfaActivateRequestType) {
    try {
      return this._authTfaService.activate(data);
    } catch (error) {
      throw new ForbiddenException(`Não foi possível ativar sua Verificação de duas etapas neste momento!`);
    }
  }

  @Post("verify")
  async TfaVerify(@Body() data: TfaVerifyRequestType){
    try {
      return this._authTfaService.verify(data);
    } catch (error) {
      throw new ForbiddenException(`Não foi validar seu código!`);
    }
  }


}
