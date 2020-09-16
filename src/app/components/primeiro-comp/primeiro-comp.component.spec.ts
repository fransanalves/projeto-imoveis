import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroCompComponent } from './primeiro-comp.component';

describe('PrimeiroCompComponent', () => {
  let component: PrimeiroCompComponent;
  let fixture: ComponentFixture<PrimeiroCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
