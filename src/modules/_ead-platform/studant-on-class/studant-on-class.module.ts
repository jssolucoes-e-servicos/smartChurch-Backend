import { Module } from '@nestjs/common';
import { StudantOnClassService } from './studant-on-class.service';
import { StudantOnClassController } from './studant-on-class.controller';

@Module({
  controllers: [StudantOnClassController],
  providers: [StudantOnClassService]
})
export class StudantOnClassModule {}
