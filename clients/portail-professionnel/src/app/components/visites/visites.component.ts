import { Component, OnInit } from '@angular/core';
import {ArtefactService} from './../../services/artefact.service'
import { Visites } from '../../interfaces/Artefact.interface';
@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.css']
})
export class VisitesComponent implements OnInit {

  constructor( private Artefact: ArtefactService,) { }
   public Visites : any
  ngOnInit(): void {
    this.Artefact.getVisite(0).subscribe()
      if(sessionStorage.getItem('Visites')){
        this.Visites = sessionStorage.getItem('Visites')
     }
    console.log("done")
  }

  
}
