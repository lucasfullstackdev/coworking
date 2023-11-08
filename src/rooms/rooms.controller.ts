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

@ApiTags('rooms')
@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  findAll(): Promise<RoomDto[]> {
    return this.roomsService.getRooms();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<RoomDto> {
    return this.roomsService.getRoom(id);
  }

  @Post()
  create(@Body() roomCreateDto: RoomCreateDto) {
    return this.roomsService.create(roomCreateDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() roomUpdateDto: RoomUpdateDto) {
    return this.roomsService.update(id, roomUpdateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.roomsService.delete(id);
  }
}
