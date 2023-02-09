import { Module } from '@nestjs/common';
import { StudantOnClassService } from './studant-on-class.service';
import { StudantOnClassController } from './studant-on-class.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [StudantOnClassController],
  providers: [StudantOnClassService, PrismaService],
})
export class StudantOnClassModule {}
