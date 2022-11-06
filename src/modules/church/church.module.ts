import { Module } from '@nestjs/common';
import { ChurchService } from './church.service';
import { ChurchController } from './church.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [ChurchController],
  providers: [ChurchService, PrismaService]
})
export class ChurchModule {}
