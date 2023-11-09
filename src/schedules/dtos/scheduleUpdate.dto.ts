import { IsOptional, IsNumber, IsString } from 'class-validator';

export class ScheduleUpdateDto {
  @IsString()
  @IsOptional()
  readonly room: string;

  @IsString()
  @IsOptional()
  readonly customer: string;

  @IsString()
  @IsOptional()
  readonly service: string;

  @IsNumber()
  @IsOptional()
  readonly total: number;

  @IsString()
  @IsOptional()
  readonly startAt: string;

  @IsString()
  @IsOptional()
  readonly endAt: string;
}
