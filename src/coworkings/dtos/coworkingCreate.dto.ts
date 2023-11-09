import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CoworkingCreateDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly active: boolean;
}
