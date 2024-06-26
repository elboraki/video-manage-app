import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUpdateComponent } from './video-update.component';

describe('VideoUpdateComponent', () => {
  let component: VideoUpdateComponent;
  let fixture: ComponentFixture<VideoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
