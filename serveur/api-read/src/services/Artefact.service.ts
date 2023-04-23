import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';
import { Antecedants, Visites } from '@dtos/artefacts.dto';
@Service()
export class ArtefactService {
  public visites = new PrismaClient().visites;
  public antecedants = new PrismaClient().antecedants;

  public async findAllVisites(): Promise<Visites[]> {
    const allvisites: Visites[] = await this.visites.findMany();
    return allvisites;
  }
  public async findAllAntecedants(): Promise<Antecedants[]> {
    const allvisites: Antecedants[] = await this.antecedants.findMany();
    return allvisites;
  }
}
