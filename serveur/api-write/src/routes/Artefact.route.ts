import { Router } from 'express';
import { ArtefactController } from '@controllers/artefact.controller';
import { Routes } from '@interfaces/routes.interface';

export class ArtefactRoute implements Routes {
  public VisitesPath = '/Visites';
  public AntecedantsPath = '/Antecedants';
  public router = Router();
  public artefact = new ArtefactController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.AntecedantsPath}`, this.artefact.getAntecedants);
    this.router.post(`${this.VisitesPath}`, this.artefact.getVisites);
    this.router.post(`${this.AntecedantsPath}create/`, this.artefact.createAntecedants);
    this.router.post(`${this.VisitesPath}create/`, this.artefact.createVisite);
  }
}
