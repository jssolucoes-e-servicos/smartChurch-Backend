import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { PersonOnChurchController } from './person-on-church.controller';
import { PersonOnChurchService } from './person-on-church.service';

@Module({
  controllers: [PersonOnChurchController],
  providers: [PersonOnChurchService, PrismaService]
})
export class PersonOnChurchModule {}
