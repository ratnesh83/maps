import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectComponent } from './intersect.component';

describe('IntersectComponent', () => {
  let component: IntersectComponent;
  let fixture: ComponentFixture<IntersectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntersectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
