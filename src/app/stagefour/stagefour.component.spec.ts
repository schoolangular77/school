import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagefourComponent } from './stagefour.component';

describe('StagefourComponent', () => {
  let component: StagefourComponent;
  let fixture: ComponentFixture<StagefourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagefourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StagefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
