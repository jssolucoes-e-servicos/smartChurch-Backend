import { Module } from '@nestjs/common';
import { PersonAdressService } from './person-adress.service';
import { PersonAdressController } from './person-adress.controller';

@Module({
  controllers: [PersonAdressController],
  providers: [PersonAdressService]
})
export class PersonAdressModule {}
