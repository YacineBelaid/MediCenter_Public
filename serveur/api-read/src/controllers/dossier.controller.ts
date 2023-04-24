import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { DossierService } from '@/services/dossier.service';
import { Dossier } from '@/dtos/dossier.dto';

export class DossierController {
  public Service = Container.get(DossierService);

  public getDossier = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dossierId = req.params.id;

      const findDossierById: Dossier = await this.Service.findDossierById(dossierId);

      res.status(200).json({ data: findDossierById, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}
