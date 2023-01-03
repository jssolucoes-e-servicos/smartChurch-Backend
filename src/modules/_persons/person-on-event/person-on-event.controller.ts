import { Controller } from '@nestjs/common';
import { PersonOnEventService } from './person-on-event.service';

@Controller('person-on-event')
export class PersonOnEventController {
  constructor(private readonly personOnEventService: PersonOnEventService) {}
}
