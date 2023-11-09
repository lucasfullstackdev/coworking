import { CoworkingResponseDto } from 'src/coworkings/dtos/coworking-response.dto';

export class RoomResponseDto {
  readonly id: string;
  readonly title: string;
  readonly value: number;
  readonly coworking: CoworkingResponseDto;

  constructor(id: string, title: string, value: number, coworking: string) {
    this.id = id;
    this.title = title;
    this.value = value;

    if (coworking != null) {
      const coworkingObj = JSON.parse(JSON.stringify(coworking));

      this.coworking = new CoworkingResponseDto(
        coworkingObj.id,
        coworkingObj.name,
        coworkingObj.active,
      );
    }
  }
}
