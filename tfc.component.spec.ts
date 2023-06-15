import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfcComponent } from './tfc.component';

describe('TfcComponent', () => {
  let component: TfcComponent;
  let fixture: ComponentFixture<TfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
