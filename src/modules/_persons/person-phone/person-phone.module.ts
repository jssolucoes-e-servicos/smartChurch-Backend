import { Module } from '@nestjs/common';
import { PersonPhoneService } from './person-phone.service';
import { PersonPhoneController } from './person-phone.controller';
import { PersonModule } from 'src/modules/_persons/person/person.module';

@Module({
  controllers: [PersonPhoneController],
  providers: [PersonPhoneService],
  imports: [PersonModule],
})
export class PersonPhoneModule {}
