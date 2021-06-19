import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryClassComponent } from './query-class.component';

describe('QueryClassComponent', () => {
  let component: QueryClassComponent;
  let fixture: ComponentFixture<QueryClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
