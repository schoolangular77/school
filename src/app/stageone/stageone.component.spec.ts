import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageoneComponent } from './stageone.component';

describe('StageoneComponent', () => {
  let component: StageoneComponent;
  let fixture: ComponentFixture<StageoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StageoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
