import { Injectable, NotFoundException } from '@nestjs/common';
import { RoomDto } from './dtos/room.dto';
import { RoomCreateDto } from './dtos/roomCreate.dto';
import { RoomUpdateDto } from './dtos/roomUpdate.dto';
import { RoomsRepository } from './rooms.repository';

@Injectable()
export class RoomsService {
  constructor(private readonly roomsRepository: RoomsRepository) {}

  async getRooms(coworking: string): Promise<RoomDto[]> {
    return (await this.roomsRepository.getRooms(coworking)).map(
      (room) => new RoomDto(room),
    );
  }

  async getRoom(coworking: string, roomId: string): Promise<RoomDto> {
    const room = await this.roomsRepository.getRoom(coworking, roomId);

    if (room == null) {
      throw new NotFoundException('Room not found');
    }

    return new RoomDto(room);
  }

  async create(roomCreateDto: RoomCreateDto): Promise<any> {
    const room = await this.roomsRepository.create(roomCreateDto);
    return new RoomDto(room);
  }

  async update(
    coworking: string,
    room: string,
    roomUpdateDto: RoomUpdateDto,
  ): Promise<any> {
    await this.roomsRepository.update(room, roomUpdateDto);
    return this.getRoom(coworking, room);
  }

  async delete(coworking: string, roomId: string) {
    const room = await this.getRoom(coworking, roomId);
    return this.roomsRepository.delete(room.id);
  }
}
