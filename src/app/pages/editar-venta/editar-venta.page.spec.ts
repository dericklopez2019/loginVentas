import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarVentaPage } from './editar-venta.page';

describe('EditarVentaPage', () => {
  let component: EditarVentaPage;
  let fixture: ComponentFixture<EditarVentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
