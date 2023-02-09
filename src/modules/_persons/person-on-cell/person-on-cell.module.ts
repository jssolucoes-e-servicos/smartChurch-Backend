import { Module } from '@nestjs/common';
import { PersonOnCellService } from './person-on-cell.service';
import { PersonOnCellController } from './person-on-cell.controller';
import { PersonModule } from 'src/modules/_persons/person/person.module';

@Module({
  controllers: [PersonOnCellController],
  providers: [PersonOnCellService],
  imports: [PersonModule],
})
export class PersonOnCellModule {}
