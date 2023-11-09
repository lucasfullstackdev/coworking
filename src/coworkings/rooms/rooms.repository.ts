import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { RoomEntity } from './room.entity';
import { RoomCreateDto } from './dtos/roomCreate.dto';
import { RoomUpdateDto } from './dtos/roomUpdate.dto';

@Injectable()
export class RoomsRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getRooms(coworking: string): Promise<RoomEntity[]> {
    return await this.dataSource.getRepository(RoomEntity).find({
      where: {
        coworking: coworking,
      },
      relations: ['coworking'],
    });
  }

  async getRoom(coworking: string, room): Promise<RoomEntity> {
    return await this.dataSource.getRepository(RoomEntity).findOne({
      where: {
        id: room,
        coworking: coworking,
      },
      relations: ['coworking'],
    });
  }

  async create(roomCreateDto: RoomCreateDto): Promise<RoomEntity> {
    return await this.dataSource.getRepository(RoomEntity).save(roomCreateDto);
  }

  async update(room: string, roomUpdateDto: RoomUpdateDto) {
    return this.dataSource
      .getRepository(RoomEntity)
      .update(room, roomUpdateDto);
  }

  async delete(room: string) {
    return await this.dataSource.getRepository(RoomEntity).delete(room);
  }
}
