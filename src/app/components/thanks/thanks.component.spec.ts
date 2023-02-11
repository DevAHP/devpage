import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaksComponent } from './thanks.component';

describe('ThaksComponent', () => {
  let component: ThaksComponent;
  let fixture: ComponentFixture<ThaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThaksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
