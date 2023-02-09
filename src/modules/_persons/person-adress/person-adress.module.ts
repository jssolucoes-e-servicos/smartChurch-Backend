import { Module } from '@nestjs/common';
import { PersonAdressService } from './person-adress.service';
import { PersonAdressController } from './person-adress.controller';
import { PersonModule } from 'src/modules/_persons/person/person.module';

@Module({
  controllers: [PersonAdressController],
  providers: [PersonAdressService],
  imports: [PersonModule],
})
export class PersonAdressModule {}
