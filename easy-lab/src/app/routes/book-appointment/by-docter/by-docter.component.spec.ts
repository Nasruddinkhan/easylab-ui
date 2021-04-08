import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDocterComponent } from './by-docter.component';

describe('ByDocterComponent', () => {
  let component: ByDocterComponent;
  let fixture: ComponentFixture<ByDocterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByDocterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByDocterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
