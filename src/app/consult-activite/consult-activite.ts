import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [FormsModule],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.scss',
  templateUrl: './consult-activite.html',
})
export class ConsultActivite {
  id: string;
  id2: string;
  index: number;
  enEdition: boolean = false;
  titreEdite: string = '';

  constructor(
    private routeActive: ActivatedRoute,
    private monRouteur: Router,
    public activiteService: ActiviteService,
  ) {
    this.id = this.routeActive.snapshot.params['id'];
    this.id2 = this.routeActive.snapshot.params['id2'];
    this.index = Number(this.id);
  }

  get activite(): string | undefined {
    return this.activiteService.objectifs[this.index];
  }

  supprimeElem(index: number) {
    this.activiteService.removeItem(index);
    this.monRouteur.navigate(['/']);
  }

  modifierElem() {
    this.titreEdite = this.activite ?? '';
    this.enEdition = true;
  }

  sauvegarderElem(index: number) {
    this.activiteService.updateItem(index, this.titreEdite);
    this.enEdition = false;
  }

  retour() {
    this.monRouteur.navigate(['/']);
  }
}
