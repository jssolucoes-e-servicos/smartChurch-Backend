import { Module } from '@nestjs/common';
import { PersonOnCellService } from './person-on-cell.service';
import { PersonOnCellController } from './person-on-cell.controller';

@Module({
  controllers: [PersonOnCellController],
  providers: [PersonOnCellService]
})
export class PersonOnCellModule {}
