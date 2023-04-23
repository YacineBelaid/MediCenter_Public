import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { ArtefactService } from '@services/Artefact.service';
import { Visites, Antecedants } from '@/dtos/artefacts.dto';

export class ArtefactController {
  public Artefact = Container.get(ArtefactService);

  public getVisites = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllVisitesData: Visites[] = await this.Artefact.findAllVisites();

      res.status(200).json({ data: findAllVisitesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  public getAntecedants = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllAntecedantsData: Antecedants[] = await this.Artefact.findAllAntecedants();

      res.status(200).json({ data: findAllAntecedantsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  public createVisite = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const VisitesData: Visites = req.body;
      const createVisitesData: Visites = await this.Artefact.createVisites(VisitesData);

      res.status(201).json({ data: createVisitesData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
  public createAntecedants = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const AntecedantsData: Antecedants = req.body;
      const createAntecedantsData: Antecedants = await this.Artefact.createAntecedants(AntecedantsData);

      res.status(201).json({ data: createAntecedantsData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}
