import { Module } from '@nestjs/common';
import { VisitorsBaptizedsService } from './visitors-baptizeds.service';
import { VisitorsBaptizedsController } from './visitors-baptizeds.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [VisitorsBaptizedsController],
  providers: [VisitorsBaptizedsService, PrismaService]
})
export class VisitorsBaptizedsModule {}
