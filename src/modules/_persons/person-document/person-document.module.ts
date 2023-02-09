import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/PrismaService';
import { PersonModule } from 'src/modules/_persons/person/person.module';
import { PersonDocumentController } from './person-document.controller';
import { PersonDocumentService } from './person-document.service';

@Module({
  controllers: [PersonDocumentController],
  providers: [PersonDocumentService, PrismaService],
  imports: [PersonModule],
  exports: [PersonDocumentService],
})
export class PersonDocumentModule {}
