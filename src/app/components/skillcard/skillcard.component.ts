import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-skillcard',
  templateUrl: './skillcard.component.html',
  styleUrls: ['./skillcard.component.css']
})
export class SkillcardComponent implements OnInit { 

  @Input()
  cardTitle1: string = '';

  @Input()
  cardTitle2: string = '';

  @Input()
  cardTitle3: string = '';

  cardSkillsLanguages = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'JavaScript'},
    {name: 'TypeScript'},
  ];

  cardSkillsFramework = [
    {name: 'Angular'},
    {name: 'VueJS'},
  ];

  cardSkillsOthers = [
    {name: 'MySql'},
    {name: 'SQL'},
    {name: 'Git'},
    {name: 'Figma'}
  ];

  constructor() {
   }

  ngOnInit(): void {
    
  }
}

