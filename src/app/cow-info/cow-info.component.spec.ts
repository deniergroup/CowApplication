import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowInfoComponent } from './cow-info.component';

describe('CowInfoComponent', () => {
  let component: CowInfoComponent;
  let fixture: ComponentFixture<CowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
