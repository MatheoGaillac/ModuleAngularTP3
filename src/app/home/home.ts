import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
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
  }

  toggleForm() {
    this.afficherForm = !this.afficherForm;
  }
}
