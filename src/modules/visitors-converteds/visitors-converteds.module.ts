import { Module } from '@nestjs/common';
import { VisitorsConvertedsService } from './visitors-converteds.service';
import { VisitorsConvertedsController } from './visitors-converteds.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [VisitorsConvertedsController],
  providers: [VisitorsConvertedsService, PrismaService]
})
export class VisitorsConvertedsModule {}
