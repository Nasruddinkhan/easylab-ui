import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByStafffComponent } from './by-stafff.component';

describe('ByStafffComponent', () => {
  let component: ByStafffComponent;
  let fixture: ComponentFixture<ByStafffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByStafffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByStafffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
