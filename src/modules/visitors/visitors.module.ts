import { Module } from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { VisitorsController } from './visitors.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [VisitorsController],
  providers: [VisitorsService, PrismaService]
})
export class VisitorsModule {}
