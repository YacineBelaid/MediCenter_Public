import { IsNotEmpty, IsString } from 'class-validator';
import { Visites } from './artefacts.dto';
import { Antecedants } from '@prisma/client';

export class Dossier {
  @IsNotEmpty()
  id: number;

  @IsString()
  nas: String;

  @IsString()
  visites: Visites[];

  @IsString()
  antecedants: Antecedants[];
}
