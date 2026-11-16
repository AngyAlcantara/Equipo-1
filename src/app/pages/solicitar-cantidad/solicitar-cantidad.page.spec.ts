import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitarCantidadPage } from './solicitar-cantidad.page';

describe('SolicitarCantidadPage', () => {
  let component: SolicitarCantidadPage;
  let fixture: ComponentFixture<SolicitarCantidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarCantidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
