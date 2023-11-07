import { RoomEntity } from '../room.entity';

export class RoomDto {
  readonly id: string;
  readonly title: string;
  readonly value: number;

  constructor(room: RoomEntity) {
    this.id = room.id;
    this.title = room.title;
    this.value = room.value;
  }
}
