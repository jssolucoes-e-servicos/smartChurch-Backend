import { Controller } from '@nestjs/common';
import { FamilyLevelsService } from './family-levels.service';

@Controller('family-levels')
export class FamilyLevelsController {
  constructor(private readonly familyLevelsService: FamilyLevelsService) {}
}
