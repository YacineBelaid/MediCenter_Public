import { IsString, IsNotEmpty } from 'class-validator';

export class Antecedants {
  @IsNotEmpty()
  id: number;

  Date: Date;

  @IsString()
  Medecin: string;

  @IsString()
  Maladie: string;
}

export class Visites {
  id: number;

  Date: Date;

  @IsString()
  Medecin: string;
}
