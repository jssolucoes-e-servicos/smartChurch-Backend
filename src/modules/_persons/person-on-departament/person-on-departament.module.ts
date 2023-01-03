import { Module } from '@nestjs/common';
import { PersonOnDepartamentService } from './person-on-departament.service';
import { PersonOnDepartamentController } from './person-on-departament.controller';

@Module({
  controllers: [PersonOnDepartamentController],
  providers: [PersonOnDepartamentService]
})
export class PersonOnDepartamentModule {}
