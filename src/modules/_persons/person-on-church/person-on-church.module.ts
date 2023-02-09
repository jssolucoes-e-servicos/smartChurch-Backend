import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { PersonModule } from 'src/modules/_persons/person/person.module';
import { PersonOnChurchController } from './person-on-church.controller';
import { PersonOnChurchService } from './person-on-church.service';

@Module({
  controllers: [PersonOnChurchController],
  providers: [PersonOnChurchService, PrismaService],
  imports: [PersonModule],
})
export class PersonOnChurchModule {}
