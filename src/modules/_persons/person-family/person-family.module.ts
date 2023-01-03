import { Module } from '@nestjs/common';
import { PersonFamilyService } from './person-family.service';
import { PersonFamilyController } from './person-family.controller';

@Module({
  controllers: [PersonFamilyController],
  providers: [PersonFamilyService]
})
export class PersonFamilyModule {}
