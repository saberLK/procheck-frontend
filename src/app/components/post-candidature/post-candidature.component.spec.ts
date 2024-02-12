import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCandidatureComponent } from './post-candidature.component';

describe('PostCandidatureComponent', () => {
  let component: PostCandidatureComponent;
  let fixture: ComponentFixture<PostCandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCandidatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
