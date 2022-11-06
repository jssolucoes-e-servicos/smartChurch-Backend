import { Module } from '@nestjs/common';
import { VisitorsCellsService } from './visitors-cells.service';
import { VisitorsCellsController } from './visitors-cells.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [VisitorsCellsController],
  providers: [VisitorsCellsService, PrismaService]
})
export class VisitorsCellsModule {}
