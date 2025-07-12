import { Controller, Post, Body, Get, Param, Patch, Delete, UsePipes, ValidationPipe, Query, NotFoundException, Inject } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CreateProgressDto } from './dto/CreateProgress.dto';
import { UpdateProgressDto } from './dto/UpdateProgress.dto';
import { Types } from 'mongoose';

@Controller('progress')
export class ProgressController {
  constructor(
    @Inject('ProgressServiceDecorated')
    private readonly progressService: ProgressService) { }

  // Tạo mới một tiến độ công việc
  @Post()
  @UsePipes(new ValidationPipe())
  async createProgress(@Body() createProgressDto: CreateProgressDto) {
    const newProgress = await this.progressService.createProgress(createProgressDto);
    return { success: true, data: newProgress };
  }

  // Lấy danh sách tiến độ công việc
  @Get()
  async getAllProgresses() {
    return this.progressService.getAllProgresses();
  }

  @Get('/by-project')
  async getProgressByProjectId(@Query('projectId') projectId: string) {
    if (!projectId || !Types.ObjectId.isValid(projectId)) {
      throw new NotFoundException('ProjectId không hợp lệ');
    }
    return this.progressService.getProgressByProjectId(new Types.ObjectId(projectId));
  }

  // Lấy thông tin tiến độ công việc theo ID
  @Get(':id')
  async getProgressById(@Param('id') id: string) {
    return this.progressService.getProgressById(id);
  }

  // Cập nhật thông tin tiến độ công việc
  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateProgress(@Param('id') id: string, @Body() updateProgressDto: UpdateProgressDto) {
    return this.progressService.updateProgress(id, updateProgressDto);
  }

  // Xóa tiến độ công việc
  @Delete(':id')
  async deleteProgress(@Param('id') id: string) {
    return this.progressService.deleteProgress(id);
  }
}
