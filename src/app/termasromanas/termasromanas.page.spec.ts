import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermasromanasPage } from './termasromanas.page';

describe('TermasromanasPage', () => {
  let component: TermasromanasPage;
  let fixture: ComponentFixture<TermasromanasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TermasromanasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
