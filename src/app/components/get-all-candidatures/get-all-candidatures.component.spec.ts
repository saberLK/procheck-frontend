import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCandidaturesComponent } from './get-all-candidatures.component';

describe('GetAllCandidaturesComponent', () => {
  let component: GetAllCandidaturesComponent;
  let fixture: ComponentFixture<GetAllCandidaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllCandidaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllCandidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
