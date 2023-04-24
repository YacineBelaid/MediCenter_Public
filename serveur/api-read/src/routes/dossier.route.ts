import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { DossierController } from '@/controllers/dossier.controller';

export class DossierRoute implements Routes {
  public router = Router();
  public dossier = new DossierController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`dossier/:id(\\d+)`, this.dossier.getDossier);
  }
}
