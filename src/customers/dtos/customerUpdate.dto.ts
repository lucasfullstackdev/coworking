import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CustomerUpdateDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsEmail()
  @IsOptional()
  readonly email: string;

  @IsString()
  @IsOptional()
  readonly phone: string;

  @IsString()
  @IsOptional()
  readonly document: string;
}
