import { Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ScheduleEntity } from './schedule.entity';
import { ScheduleCreateDto } from './dtos/scheduleCreate.dto';
import { ScheduleUpdateDto } from './dtos/scheduleUpdate.dto';
import { Alias } from 'typeorm/query-builder/Alias';

@Injectable()
export class ScheduleRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getSchedules(): Promise<ScheduleEntity[]> {
    return await this.dataSource.getRepository(ScheduleEntity).find({
      relations: ['customer', 'service', 'room.coworking'],
    });
  }

  async getSchedule(id: string): Promise<ScheduleEntity> {
    return await this.dataSource.getRepository(ScheduleEntity).findOne({
      where: {
        id: id,
      },
      relations: ['customer', 'service', 'room.coworking'],
    });
  }

  async create(scheduleCreateDto: ScheduleCreateDto): Promise<ScheduleEntity> {
    return await this.dataSource
      .getRepository(ScheduleEntity)
      .save(scheduleCreateDto);
  }

  async update(id: string, serviceUpdateDto: ScheduleUpdateDto) {
    return this.dataSource
      .getRepository(ScheduleEntity)
      .update(id, serviceUpdateDto);
  }

  async delete(id: string) {
    return this.dataSource.getRepository(ScheduleEntity).delete(id);
  }
}
