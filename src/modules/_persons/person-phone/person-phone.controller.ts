import { Controller } from '@nestjs/common';
import { PersonPhoneService } from './person-phone.service';

@Controller('person-phone')
export class PersonPhoneController {
  constructor(private readonly personPhoneService: PersonPhoneService) {}
}
