import { IsDate, IsDecimal, IsNotEmpty, IsNumber, IsString, isDecimal, isString } from 'class-validator';

export class ScheduleCreateDto {
  @IsString()
  @IsNotEmpty()
  readonly room: string;

  @IsString()
  @IsNotEmpty()
  readonly customer: string;

  @IsString()
  @IsNotEmpty()
  readonly service: string;

  @IsNumber()
  @IsNotEmpty()
  readonly total: number;

  @IsString()
  @IsNotEmpty()
  readonly startAt: string;

  @IsString()
  @IsNotEmpty()
  readonly endAt: string;
}
