import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';
import axios from 'axios';
import { HttpException } from '@/exceptions/httpException';
import { Antecedants, Visites } from '@/dtos/artefacts.dto';
@Service()
export class BdService {
  private Write_API = 'http://localhost:3000';

  public visites = new PrismaClient().visites;
  public antecedants = new PrismaClient().antecedants;

  instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000, // Spécifie un délai de 5 secondes pour la réponse
    headers: {
      'Content-Type': 'application/json',
    },
  });

  public async createAntecedants(Antecedants: Antecedants): Promise<Antecedants> {
    const findAntecedants: Antecedants = await this.antecedants.findUnique({ where: { ...Antecedants } });
    if (findAntecedants) throw new HttpException(409, `This row ${Antecedants} already exists`);

    const createAntecedantsData: Antecedants = await this.antecedants.create({ data: { ...Antecedants } });
    return createAntecedantsData;
  }
  public async createVisites(Visites: Visites): Promise<Visites> {
    const findVisites: Visites = await this.visites.findUnique({ where: { ...Visites } });
    if (findVisites) throw new HttpException(409, `This row ${Antecedants} already exists`);

    const createVisitesData: Visites = await this.visites.create({ data: { ...Visites } });
    return createVisitesData;
  }
  pullVisitesFromWrite(): void {
    axios
      .post<{ ListeVisites: Visites[] }>(this.Write_API + '/' + 'Visites')
      .then(async response => {
        const ListeVisites = response.data.ListeVisites;
        ListeVisites.forEach(visite => {
          this.createVisites(visite);
        });
      })
      .catch(error => {
        console.error(error); // Gérez les erreurs éventuelles
      });
  }
  pullAntecedantsFromWrite() {
    axios
      .post<{ ListeAntecedants: any }>(this.Write_API + '/' + 'Antecedants')
      .then(async response => {
        const ListeAntecedants = response.data.ListeAntecedants;
        ListeAntecedants.forEach(Antecedant => {
          this.createAntecedants(Antecedant);
        });
      })
      .catch(error => {
        console.error(error); // Gérez les erreurs éventuelles
      });
  }
}
