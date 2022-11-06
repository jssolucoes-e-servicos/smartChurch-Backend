import { Module } from '@nestjs/common';
import { CellsNetworkService } from './cells-network.service';
import { CellsNetworkController } from './cells-network.controller';
import { PrismaService } from 'src/databases/PrismaService';

@Module({
  controllers: [CellsNetworkController],
  providers: [CellsNetworkService, PrismaService]
})
export class CellsNetworkModule {}
