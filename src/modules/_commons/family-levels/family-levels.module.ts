import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { FamilyLevelsController } from './family-levels.controller';
import { FamilyLevelsService } from './family-levels.service';

@Module({
  controllers: [FamilyLevelsController],
  providers: [FamilyLevelsService, PrismaService],
  exports: [FamilyLevelsService]
})
export class FamilyLevelsModule {}
