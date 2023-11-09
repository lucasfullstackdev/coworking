import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { ScheduleRepository } from './schedule.repository';
import { SchedulesController } from './schedules.controller';

@Module({
  providers: [SchedulesService, ScheduleRepository],
  controllers: [SchedulesController],
})
export class SchedulesModule {}
