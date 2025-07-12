import { Controller, Post, Body, Get, Param, Patch, Delete, UsePipes, ValidationPipe, Query, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/CreateTask.dto';
import { UpdateTaskDto } from './dto/UpdateTask.dto';
import { TaskService } from './tasks.service';
import { Types } from 'mongoose';

@Controller('tasks') // Tên endpoint là 'tasks'
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // Tạo mới một nhiệm vụ
  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    const newTask = await this.taskService.createTask(createTaskDto);
    return { success: true, data: newTask };
  }

  // Lấy danh sách nhiệm vụ
  @Get()
  async getAllTasks() {
    return this.taskService.getAllTasks();
  }
@Get('/by-progress')
  async getTaskByProgressId(@Query('progressId') progressId: string) {
    if (!progressId || !Types.ObjectId.isValid(progressId)) {
      throw new NotFoundException('ProjectId không hợp lệ');
    }
    return this.taskService.getTaskByProgressId(new Types.ObjectId(progressId));
  }
  
  // Lấy thông tin nhiệm vụ theo ID
  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  // Cập nhật thông tin nhiệm vụ
  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateTask(
    @Param('id') id: string, 
    @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  // Xóa nhiệm vụ
  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
