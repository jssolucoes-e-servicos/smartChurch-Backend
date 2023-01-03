import { Module } from '@nestjs/common';
import { PersonOnEventService } from './person-on-event.service';
import { PersonOnEventController } from './person-on-event.controller';

@Module({
  controllers: [PersonOnEventController],
  providers: [PersonOnEventService]
})
export class PersonOnEventModule {}
