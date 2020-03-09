import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmfinderComponent } from './atmfinder.component';

describe('AtmfinderComponent', () => {
  let component: AtmfinderComponent;
  let fixture: ComponentFixture<AtmfinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmfinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
