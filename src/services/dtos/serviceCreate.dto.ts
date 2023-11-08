import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class ServiceCreateDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;
}
