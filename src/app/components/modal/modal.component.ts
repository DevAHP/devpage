import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  ativo: boolean = false;

  @Output() show: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onShowModal(): void {
    this.ativo = true;
    this.show.emit();
  }

  fechar() {
    this.ativo = false;
  }

}
