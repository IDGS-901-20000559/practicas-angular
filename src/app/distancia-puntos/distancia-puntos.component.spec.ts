import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanciaPuntosComponent } from './distancia-puntos.component';

describe('DistanciaPuntosComponent', () => {
  let component: DistanciaPuntosComponent;
  let fixture: ComponentFixture<DistanciaPuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistanciaPuntosComponent]
    });
    fixture = TestBed.createComponent(DistanciaPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
