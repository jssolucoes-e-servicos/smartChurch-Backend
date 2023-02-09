import { Module } from '@nestjs/common';
import { PersonFamilyService } from './person-family.service';
import { PersonFamilyController } from './person-family.controller';
import { PersonModule } from 'src/modules/_persons/person/person.module';

@Module({
  controllers: [PersonFamilyController],
  providers: [PersonFamilyService],
  imports: [PersonModule],
})
export class PersonFamilyModule {}
