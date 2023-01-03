import { Controller } from '@nestjs/common';
import { PersonOnChurchService } from './person-on-church.service';

@Controller('person-on-church')
export class PersonOnChurchController {
  constructor(private readonly personOnChurchService: PersonOnChurchService) {}
}
