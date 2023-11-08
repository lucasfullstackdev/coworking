import { IsNotEmpty, IsString } from 'class-validator';

export class CoworkingServiceCreateDto {
  @IsString()
  @IsNotEmpty()
  readonly coworking: string;

  @IsString()
  @IsNotEmpty()
  readonly service: string;
}
