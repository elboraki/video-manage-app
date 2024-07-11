import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  apiUrl="http://localhost:3000/api/";
  http=inject(HttpClient)


  getvideos():Observable<Video[]>{
    return this.http.get<Video[]>(this.apiUrl+"videos")
  }
}
