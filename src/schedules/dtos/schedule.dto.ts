import { Logger } from '@nestjs/common';
import { ScheduleEntity } from '../schedule.entity';
import { CustomerResponseDto } from 'src/customers/dtos/customerResponse.dto';
import { RoomResponseDto } from 'src/coworkings/rooms/dtos/roomResponse.dto';
import { ServiceResponseDto } from 'src/services/dtos/serviceResponse.dto';

export class ScheduleDto {
  readonly id: string;
  readonly room: RoomResponseDto;
  readonly customer: CustomerResponseDto;
  readonly service: ServiceResponseDto;
  readonly total: number;
  readonly startAt: Date;
  readonly endAt: Date;

  constructor(schedule: ScheduleEntity) {
    this.id = schedule.id;
    this.total = schedule.total;
    this.startAt = schedule.startAt;
    this.endAt = schedule.endAt;

    if (schedule.room != null) {
      const room = JSON.parse(JSON.stringify(schedule.room));
      this.room = new RoomResponseDto(
        room.id,
        room.title,
        room.value,
        room.coworking,
      );
    }

    if (schedule.customer != null) {
      const customer = JSON.parse(JSON.stringify(schedule.customer));
      this.customer = new CustomerResponseDto(
        customer.id,
        customer.name,
        customer.email,
        customer.phone,
        customer.document,
      );
    }

    if (schedule.service != null) {
      const service = JSON.parse(JSON.stringify(schedule.service));
      this.service = new ServiceResponseDto(
        service.id,
        service.title,
        service.active,
      );
    }
  }
}
