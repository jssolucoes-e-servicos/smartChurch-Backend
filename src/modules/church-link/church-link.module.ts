import { Module } from '@nestjs/common';
import { ChurchLinkService } from './church-link.service';
import { ChurchLinkController } from './church-link.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [ChurchLinkController],
  providers: [ChurchLinkService, PrismaService],
  exports: [ChurchLinkService],
})
export class ChurchLinkModule {}
