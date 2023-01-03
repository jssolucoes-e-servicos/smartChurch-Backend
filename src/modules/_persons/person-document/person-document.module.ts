import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { PersonDocumentController } from './person-document.controller';
import { PersonDocumentService } from './person-document.service';

@Module({
  controllers: [PersonDocumentController],
  providers: [PersonDocumentService, PrismaService],
  exports: [PersonDocumentService]
})
export class PersonDocumentModule {}
