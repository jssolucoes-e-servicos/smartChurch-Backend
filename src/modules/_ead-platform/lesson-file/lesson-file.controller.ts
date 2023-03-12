import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { Express } from 'express';
import { JwtAuthGuard } from 'src/modules/_security/auth/guard/jwt-auth.guard';
import { LessonFileService } from './lesson-file.service';
import {
  LessonFileDTO,
  LessonFileUpdateFileDTO,
  LessonFileUploadDTO,
} from './lesson-file.dto';
import { diskStorage } from 'multer';
import { HelperFile } from 'src/utils/HelperFile';

/* MulterModule.register({
  dest: './uploads/',
}); */

@UseGuards(JwtAuthGuard)
@Controller('api/lesson-file')
export class LessonFileController {
  constructor(private readonly lessonFileService: LessonFileService) {}

  @Get()
  async findAll() {
    return this.lessonFileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.lessonFileService.findOne(id);
  }

  @Get('find-by-lesson/:id')
  async findByLesson(@Param('id') id: string) {
    return this.lessonFileService.findByLesson(id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './storage/files/lesson-files',
        filename: HelperFile.customFilename,
      }),
    }),
  )
  async create(
    @Body() data: LessonFileUploadDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const mimetypeSplit: string[] = file.mimetype.split('/');
    const mimetype: string = mimetypeSplit[mimetypeSplit.length - 1];
    const toSave = {
      name: data.name,
      format: mimetype,
      courseLessonId: data.courseLessonId,
      url: file.path,
    };
    return this.lessonFileService.create(toSave);
  }

  @Post('change-file/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() data: LessonFileUpdateFileDTO,
  ) {
    let mimetype: string | string[] = file.mimetype.split('/');
    mimetype = mimetype[mimetype.length - 1];
    const toSave = {
      name: data.name,
      format: mimetype,
      courseLessonId: data.courseLessonId,
      url: file.path,
    };
    return this.lessonFileService.update(id, toSave);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: LessonFileDTO) {
    return this.lessonFileService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.lessonFileService.delete(id);
  }
}
