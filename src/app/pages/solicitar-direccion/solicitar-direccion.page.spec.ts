import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitarDireccionPage } from './solicitar-direccion.page';

describe('SolicitarDireccionPage', () => {
  let component: SolicitarDireccionPage;
  let fixture: ComponentFixture<SolicitarDireccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarDireccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
