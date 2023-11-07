import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { RoomEntity } from './room.entity';
import { RoomCreateDto } from './dtos/roomCreate.dto';
import { RoomUpdateDto } from './dtos/roomUpdate.dto';

@Injectable()
export class RoomsRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getRooms(): Promise<RoomEntity[]> {
    return await this.dataSource.getRepository(RoomEntity).find({
      relations: ['coworking'],
    });
  }

  async getRoom(id: string): Promise<RoomEntity> {
    return await this.dataSource.getRepository(RoomEntity).findOne({
      where: {
        id: id,
      },
      relations: ['coworking'],
    });
  }

  async create(roomCreateDto: RoomCreateDto): Promise<RoomEntity> {
    return await this.dataSource.getRepository(RoomEntity).save(roomCreateDto);
  }

  async update(id: string, roomUpdateDto: RoomUpdateDto) {
    return this.dataSource.getRepository(RoomEntity).update(id, roomUpdateDto);
  }

  async delete(id: string) {
    return this.dataSource.getRepository(RoomEntity).delete(id);
  }
}
