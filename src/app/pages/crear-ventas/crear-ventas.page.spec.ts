import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearVentasPage } from './crear-ventas.page';

describe('CrearVentasPage', () => {
  let component: CrearVentasPage;
  let fixture: ComponentFixture<CrearVentasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearVentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
