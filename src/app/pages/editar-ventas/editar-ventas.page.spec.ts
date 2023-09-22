import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarVentasPage } from './editar-ventas.page';

describe('EditarVentasPage', () => {
  let component: EditarVentasPage;
  let fixture: ComponentFixture<EditarVentasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarVentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
