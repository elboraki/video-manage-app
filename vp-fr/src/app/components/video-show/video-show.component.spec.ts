import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoShowComponent } from './video-show.component';

describe('VideoShowComponent', () => {
  let component: VideoShowComponent;
  let fixture: ComponentFixture<VideoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
