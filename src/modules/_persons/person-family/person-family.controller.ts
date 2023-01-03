import { Controller } from '@nestjs/common';
import { PersonFamilyService } from './person-family.service';

@Controller('person-family')
export class PersonFamilyController {
  constructor(private readonly personFamilyService: PersonFamilyService) {}
}
