import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowsMothersInfoComponent } from './cows-mothers-info.component';

describe('CowsMothersInfoComponent', () => {
  let component: CowsMothersInfoComponent;
  let fixture: ComponentFixture<CowsMothersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowsMothersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowsMothersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
