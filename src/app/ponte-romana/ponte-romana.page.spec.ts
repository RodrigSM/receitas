import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PonteRomanaPage } from './ponte-romana.page';

describe('PonteRomanaPage', () => {
  let component: PonteRomanaPage;
  let fixture: ComponentFixture<PonteRomanaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PonteRomanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
