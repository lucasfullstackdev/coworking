import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomDto } from './dtos/room.dto';
import { RoomCreateDto } from './dtos/roomCreate.dto';
import { RoomUpdateDto } from './dtos/roomUpdate.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Coworking Rooms')
@Controller('coworkings/:coworking/rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  findAll(@Param('coworking') coworking: string): Promise<RoomDto[]> {
    return this.roomsService.getRooms(coworking);
  }

  @Get(':room')
  findOne(
    @Param('coworking') coworking: string,
    @Param('room') room: string,
  ): Promise<RoomDto> {
    return this.roomsService.getRoom(coworking, room);
  }

  @Post()
  create(@Body() roomCreateDto: RoomCreateDto) {
    return this.roomsService.create(roomCreateDto);
  }

  @Put(':room')
  update(
    @Param('coworking') coworking: string,
    @Param('room') room: string,
    @Body() roomUpdateDto: RoomUpdateDto,
  ) {
    return this.roomsService.update(coworking, room, roomUpdateDto);
  }

  @Delete(':room')
  delete(@Param('coworking') coworking: string, @Param('room') room: string) {
    return this.roomsService.delete(coworking, room);
  }
}
