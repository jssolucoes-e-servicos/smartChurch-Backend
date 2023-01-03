import { Module } from '@nestjs/common';
import { PersonPhoneService } from './person-phone.service';
import { PersonPhoneController } from './person-phone.controller';

@Module({
  controllers: [PersonPhoneController],
  providers: [PersonPhoneService]
})
export class PersonPhoneModule {}
