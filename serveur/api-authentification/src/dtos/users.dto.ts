// eslint-disable-next-line prettier/prettier
import { IsBoolean, IsString, IsNotEmpty, MinLength, MaxLength, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  public id: number;
  @IsString()
  @MaxLength(1000)
  public email: string;
  @IsString()
  @MinLength(4)
  @MaxLength(1000)
  public password: string;
  @IsBoolean()
  public pro_sante: boolean;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(32)
  public password: String;
  @IsBoolean()
  public pro_sante: Boolean;
}
