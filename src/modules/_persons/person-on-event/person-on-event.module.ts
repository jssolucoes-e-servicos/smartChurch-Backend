import { Module } from '@nestjs/common';
import { PersonOnEventService } from './person-on-event.service';
import { PersonOnEventController } from './person-on-event.controller';
import { PersonModule } from 'src/modules/_persons/person/person.module';

@Module({
  controllers: [PersonOnEventController],
  providers: [PersonOnEventService],
  imports: [PersonModule],
})
export class PersonOnEventModule {}
