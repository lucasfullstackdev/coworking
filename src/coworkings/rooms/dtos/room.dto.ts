import { RoomEntity } from '../room.entity';
import { CoworkingResponseDto } from 'src/coworkings/dtos/coworking-response.dto';

export class RoomDto {
  readonly id: string;
  readonly title: string;
  readonly value: number;
  readonly coworking: CoworkingResponseDto;

  constructor(room: RoomEntity) {
    this.id = room.id;
    this.title = room.title;
    this.value = room.value;

    if (room.coworking != null) {
      const coworking = JSON.parse(JSON.stringify(room.coworking));

      this.coworking = new CoworkingResponseDto(
        coworking.id,
        coworking.name,
        coworking.active,
      );
    }
  }
}
