// eslint-disable-next-line prettier/prettier
import { IsBoolean, IsString, IsNotEmpty, MinLength, MaxLength, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsInt()
  public identifiant: number;
  @IsString()
  @MaxLength(1000)
  public lastname: string;
  @IsString()
  @MaxLength(1000)
  public Firstname: string;
  public Date_naissance: string;
  @IsString()
  @MinLength(4)
  @MaxLength(1000)
  public password: string;
  @IsBoolean()
  public pro_sante: boolean;
}
