import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class ServiceUpdateDto {
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsBoolean()
  @IsOptional()
  readonly active: boolean;
}
