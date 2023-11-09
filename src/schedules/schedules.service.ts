import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ScheduleRepository } from './schedule.repository';
import { ScheduleDto } from './dtos/schedule.dto';
import { ScheduleCreateDto } from './dtos/scheduleCreate.dto';
import { ScheduleUpdateDto } from './dtos/scheduleUpdate.dto';

@Injectable()
export class SchedulesService {
  constructor(private readonly scheduleRepository: ScheduleRepository) {}

  async getSchedules(): Promise<ScheduleDto[]> {
    return (await this.scheduleRepository.getSchedules()).map(
      (room) => new ScheduleDto(room),
    );
  }

  async getSchedule(id: string): Promise<ScheduleDto> {
    const room = await this.scheduleRepository.getSchedule(id);

    if (room == null) {
      throw new NotFoundException('Schedule not found');
    }

    return new ScheduleDto(room);
  }

  async create(scheduleCreateDto: ScheduleCreateDto): Promise<ScheduleDto> {
    const schedule = await this.scheduleRepository.create(scheduleCreateDto);
    return this.getSchedule(schedule.id);
  }

  async update(
    id: string,
    scheduleUpdateDto: ScheduleUpdateDto,
  ): Promise<ScheduleDto> {
    await this.scheduleRepository.update(id, scheduleUpdateDto);
    return this.getSchedule(id);
  }

  async delete(id: string) {
    return this.scheduleRepository.delete(id);
  }
}
