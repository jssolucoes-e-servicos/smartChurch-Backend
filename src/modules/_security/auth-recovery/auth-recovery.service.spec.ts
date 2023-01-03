import { Test, TestingModule } from '@nestjs/testing';
import { AuthRecoveryService } from './auth-recovery.service';

describe('AuthRecoveryService', () => {
  let service: AuthRecoveryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthRecoveryService],
    }).compile();

    service = module.get<AuthRecoveryService>(AuthRecoveryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
