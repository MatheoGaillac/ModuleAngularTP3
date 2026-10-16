import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  constructor(
    private monRouteur: Router,
    public activiteService: ActiviteService,
  ) {}

  nbItems: number = 4;
  btnText: string = 'Ajouter un élément';
  objectifText: string = '';
  afficherForm: boolean = false;

  ngOnInit() {
    this.nbItems = this.activiteService.objectifs.length;
  }

  ajoutItem() {
    this.activiteService.objectifs.push(this.objectifText);
    this.nbItems = this.activiteService.objectifs.length;
    this.objectifText = '';
    setTimeout(() => {
      this.monRouteur.navigate(['/about']);
    }, 1000);
  }

  toggleForm() {
    this.afficherForm = !this.afficherForm;
  }

  afficherDetail(index: number) {
    this.monRouteur.navigate(['/consultAct', index]);
  }
}
