import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFuncionarioComponent } from './list-funcionario.component';

describe('ListFuncionarioComponent', () => {
  let component: ListFuncionarioComponent;
  let fixture: ComponentFixture<ListFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
