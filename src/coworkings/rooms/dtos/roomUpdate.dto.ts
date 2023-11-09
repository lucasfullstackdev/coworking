import { IsNumber, IsOptional, IsString } from 'class-validator';

export class RoomUpdateDto {
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsNumber()
  @IsOptional()
  value: number;
}
