import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCowsComponent } from './show-cows.component';

describe('ShowCowsComponent', () => {
  let component: ShowCowsComponent;
  let fixture: ComponentFixture<ShowCowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
