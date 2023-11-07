import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RoomCreateDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsNumber()
  readonly value: number;
}
