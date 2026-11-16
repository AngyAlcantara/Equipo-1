import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitarFechaPage } from './solicitar-fecha.page';

describe('SolicitarFechaPage', () => {
  let component: SolicitarFechaPage;
  let fixture: ComponentFixture<SolicitarFechaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarFechaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
