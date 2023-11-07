import { Injectable } from '@nestjs/common';
// import { RoomEntity } from './room.entity';
import { RoomDto } from './dtos/room.dto';
import { RoomCreateDto } from './dtos/roomCreate.dto';
import { RoomUpdateDto } from './dtos/roomUpdate.dto';
import { RoomsRepository } from './rooms.repository';

@Injectable()
export class RoomsService {
  constructor(private readonly roomsRepository: RoomsRepository) {}

  async getRooms(): Promise<RoomDto[]> {
    return (await this.roomsRepository.getRooms()).map(
      (room) => new RoomDto(room),
    );
  }

  async getRoom(id: string): Promise<RoomDto> {
    const room = await this.roomsRepository.getRoom(id);

    return new RoomDto(room);
  }

  async create(roomCreateDto: RoomCreateDto): Promise<RoomDto> {
    const room = await this.roomsRepository.create(roomCreateDto);
    return new RoomDto(room);
  }

  async update(id: string, roomUpdateDto: RoomUpdateDto): Promise<any> {
    await this.roomsRepository.update(id, roomUpdateDto);
    return this.getRoom(id);
  }

  async delete(id: string) {
    return this.roomsRepository.delete(id);
  }
}
