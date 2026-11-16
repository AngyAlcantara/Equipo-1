import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisDireccionesPage } from './mis-direcciones.page';

describe('MisDireccionesPage', () => {
  let component: MisDireccionesPage;
  let fixture: ComponentFixture<MisDireccionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisDireccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
