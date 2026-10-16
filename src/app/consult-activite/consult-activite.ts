import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.scss',
  templateUrl: './consult-activite.html',
})
export class ConsultActivite {
  id: string;
  id2: string;

  constructor(private routeActive: ActivatedRoute) {
    this.id = this.routeActive.snapshot.params['id'];
    this.id2 = this.routeActive.snapshot.params['id2'];
  }
}
