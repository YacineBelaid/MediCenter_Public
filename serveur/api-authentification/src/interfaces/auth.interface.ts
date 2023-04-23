import { Request } from 'express';
import { User } from '@interfaces/users.interface';

export interface DataStoredInToken {
  identifiant: number;
  professionnel_sante: boolean;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: User;
}
