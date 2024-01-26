import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadDepartamentoComponent } from './cad-departamento.component';

describe('CadDepartamentoComponent', () => {
  let component: CadDepartamentoComponent;
  let fixture: ComponentFixture<CadDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadDepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
