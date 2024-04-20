import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitasIndividualPage } from './receitas-individual.page';

describe('ReceitasIndividualPage', () => {
  let component: ReceitasIndividualPage;
  let fixture: ComponentFixture<ReceitasIndividualPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitasIndividualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
