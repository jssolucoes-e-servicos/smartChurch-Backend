import { Controller } from '@nestjs/common';
import { PersonAdressService } from './person-adress.service';

@Controller('person-adress')
export class PersonAdressController {
  constructor(private readonly personAdressService: PersonAdressService) {}
}
