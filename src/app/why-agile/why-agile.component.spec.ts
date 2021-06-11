import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAgileComponent } from './why-agile.component';

describe('WhyAgileComponent', () => {
  let component: WhyAgileComponent;
  let fixture: ComponentFixture<WhyAgileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyAgileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAgileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
