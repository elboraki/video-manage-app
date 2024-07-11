import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { VideoService } from '../../services/video.service';
import { Video } from '../../interfaces/video';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [ButtonModule,TableModule],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent  implements OnInit{
  videos:Video[]=[]

  constructor(private readonly videoService:VideoService){

  }
  ngOnInit(): void {
    this.videoService.getvideos().subscribe(data=>{
      this.videos=data
    })
  }




}
