import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cardcourse',
  templateUrl: './cardcourse.component.html',
  styleUrls: ['./cardcourse.component.css']
})
export class CardcourseComponent implements OnInit {

  @Input()
  cardCourseIcon: string = '';

  @Input()
  cardCourseTitle: string = '';
 
  @Input()
  cardCourseIcon1: string = '';

  @Input()
  cardCourseTitle1: string = '';

  cardCourseList: Courses[] = [
    {title: 'Inglês', span: '/ Basic', hours: '-'},
    {title: 'Espanhol', span: '/ Basic', hours: '-'},
  ]

  cardCourseList1: Courses[] = [
    {title: 'UI/Design', span: ': Origamid', hours: '17h'},
    {title: 'JavaScript', span: ': Origamid', hours: '37h'},
  ]

  constructor() {}

  ngOnInit(): void {
    
  }

}

class Courses {
  title: string;
  span: string;
  hours: string;

  constructor(title: string, span: string, hours: string) {
    this.title = title;
    this.span = span;
    this.hours = hours;
   }
}
