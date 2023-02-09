import { Module } from '@nestjs/common';
import { CellService } from './cell.service';
import { CellController } from './cell.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [CellController],
  providers: [CellService, PrismaService],
  exports: [CellService],
})
export class CellModule {}
