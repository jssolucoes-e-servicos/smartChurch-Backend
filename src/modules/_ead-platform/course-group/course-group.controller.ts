import { Controller } from '@nestjs/common';
import { CourseGroupService } from './course-group.service';

@Controller('course-group')
export class CourseGroupController {
  constructor(private readonly courseGroupService: CourseGroupService) {}
}
