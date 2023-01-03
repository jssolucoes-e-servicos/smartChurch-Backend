import { Controller } from '@nestjs/common';
import { PersonOnCellService } from './person-on-cell.service';

@Controller('person-on-cell')
export class PersonOnCellController {
  constructor(private readonly personOnCellService: PersonOnCellService) {}
}
