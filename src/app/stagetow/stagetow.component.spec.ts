import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagetowComponent } from './stagetow.component';

describe('StagetowComponent', () => {
  let component: StagetowComponent;
  let fixture: ComponentFixture<StagetowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagetowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StagetowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
