import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProvincesComponent } from './search-provinces.component';

describe('SearchProvincesComponent', () => {
  let component: SearchProvincesComponent;
  let fixture: ComponentFixture<SearchProvincesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProvincesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProvincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
