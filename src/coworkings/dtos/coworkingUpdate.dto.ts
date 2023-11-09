import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CoworkingUpdateDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsBoolean()
  @IsOptional()
  readonly active: boolean;
}
