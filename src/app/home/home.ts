import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  constructor(private monRouteur: Router) {}

  nbItems: number = 4;
  btnText: string = 'Ajouter un élément';
  objectifText: string = '';
  objectifs: string[] = [];
  afficherForm: boolean = false;

  ngOnInit() {
    this.nbItems = this.objectifs.length;
  }

  ajoutItem() {
    this.objectifs.push(this.objectifText);
    this.nbItems = this.objectifs.length;
    this.objectifText = '';
    setTimeout(() => {
      this.monRouteur.navigate(['/about']);
    }, 1000);
  }

  toggleForm() {
    this.afficherForm = !this.afficherForm;
  }
}
