import { Controller } from '@nestjs/common';
import { PersonOnDepartamentService } from './person-on-departament.service';

@Controller('person-on-departament')
export class PersonOnDepartamentController {
  constructor(private readonly personOnDepartamentService: PersonOnDepartamentService) {}
}
