import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BySelfComponent } from './by-self.component';

describe('BySelfComponent', () => {
  let component: BySelfComponent;
  let fixture: ComponentFixture<BySelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BySelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BySelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
