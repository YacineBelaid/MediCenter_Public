import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';
import { Antecedants, Visites } from '@dtos/artefacts.dto';
import { HttpException } from '@/exceptions/httpException';
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
  public async createAntecedants(Antecedants: Antecedants): Promise<Antecedants> {
    const findAntecedants: Antecedants = await this.antecedants.findUnique({ where: { id : Antecedants.id } });
    if (findAntecedants) throw new HttpException(409, `This row ${Antecedants} already exists`);

    const createAntecedantsData: Antecedants = await this.antecedants.create({ data: { ...Antecedants } });
    return createAntecedantsData;
  }
  public async createVisites(Visites: Visites): Promise<Visites> {
    const findVisites: Visites = await this.visites.findUnique({ where: { id : Visites.id } });
    if (findVisites) throw new HttpException(409, `This row ${Antecedants} already exists`);

    const createVisitesData: Visites = await this.visites.create({ data: { ...Visites } });
    return createVisitesData;
  }
}
