import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';

@Module({
  controllers: [PersonController],
  providers: [PersonService, PrismaService],
  exports: [PersonService]
})
export class PersonModule {}
