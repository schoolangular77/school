import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagethreeComponent } from './stagethree.component';

describe('StagethreeComponent', () => {
  let component: StagethreeComponent;
  let fixture: ComponentFixture<StagethreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagethreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StagethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
