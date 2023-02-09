import { Module } from '@nestjs/common';
import { PersonOnDepartamentService } from './person-on-departament.service';
import { PersonOnDepartamentController } from './person-on-departament.controller';
import { PersonModule } from 'src/modules/_persons/person/person.module';

@Module({
  controllers: [PersonOnDepartamentController],
  providers: [PersonOnDepartamentService],
  imports: [PersonModule],
})
export class PersonOnDepartamentModule {}
