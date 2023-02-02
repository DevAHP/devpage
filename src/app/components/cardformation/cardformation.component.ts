import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardformation',
  templateUrl: './cardformation.component.html',
  styleUrls: ['./cardformation.component.css']
})
export class CardformationComponent implements OnInit {

  @Input()
  formationType: string = '';

  @Input()
  formationCourse: string = '';

  @Input()
  formmationSituation: string = '';

  @Input()
  formationInstitution: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
