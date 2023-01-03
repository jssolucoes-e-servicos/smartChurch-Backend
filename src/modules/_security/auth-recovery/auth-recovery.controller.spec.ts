import { Test, TestingModule } from '@nestjs/testing';
import { AuthRecoveryController } from './auth-recovery.controller';
import { AuthRecoveryService } from './auth-recovery.service';

describe('AuthRecoveryController', () => {
  let controller: AuthRecoveryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthRecoveryController],
      providers: [AuthRecoveryService],
    }).compile();

    controller = module.get<AuthRecoveryController>(AuthRecoveryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
