import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasteloChavesPage } from './castelo-chaves.page';

describe('CasteloChavesPage', () => {
  let component: CasteloChavesPage;
  let fixture: ComponentFixture<CasteloChavesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CasteloChavesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
