import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SchedulesService } from './schedules.service';
import { ScheduleDto } from './dtos/schedule.dto';
import { ScheduleCreateDto } from './dtos/scheduleCreate.dto';
import { ScheduleUpdateDto } from './dtos/scheduleUpdate.dto';

@ApiTags('Schedules')
@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Get()
  findAll(): Promise<ScheduleDto[]> {
    return this.schedulesService.getSchedules();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ScheduleDto> {
    return this.schedulesService.getSchedule(id);
  }

  @Post()
  create(@Body() scheduleCreateDto: ScheduleCreateDto) {
    return this.schedulesService.create(scheduleCreateDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() scheduleUpdateDto: ScheduleUpdateDto,
  ) {
    return this.schedulesService.update(id, scheduleUpdateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.schedulesService.delete(id);
  }
}
