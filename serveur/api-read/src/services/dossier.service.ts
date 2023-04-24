import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';
import { Dossier } from '@/dtos/dossier.dto';
import { Visites } from '@/dtos/artefacts.dto';
@Service()
export class DossierService {
  public prisma = new PrismaClient();

  public async findDossierById(assuranceMaladie: string): Promise<Dossier[]> {
    const visites: Visites = await this.prisma.visites.findUnique({
      where: { nas: assuranceMaladie },
    });

    // const dossierArtefact: Dossier[] = await this.prisma.dossier.findMany({
    //   where: { nas: assuranceMaladie },
    // });
    // return dossierArtefact;
    return;
  }
}
