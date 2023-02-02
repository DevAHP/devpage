import { Component, Input, Output,  OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {



  @Input()
  nameProfile: string = '';
  @Input()
  photoProfile: string = '';
  @Input()
  iconCurriculo: string = 'assets/photos/curriculo.png';


  constructor() { }

  ngOnInit(): void {
  }

}
