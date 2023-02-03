import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  @Input()
  formationImg: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
