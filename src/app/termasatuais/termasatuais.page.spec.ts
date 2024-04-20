import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermasatuaisPage } from './termasatuais.page';

describe('TermasatuaisPage', () => {
  let component: TermasatuaisPage;
  let fixture: ComponentFixture<TermasatuaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TermasatuaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
