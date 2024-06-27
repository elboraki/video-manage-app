import { Routes } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoCreateComponent } from './components/video-create/video-create.component';
import { VideoUpdateComponent } from './components/video-update/video-update.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', component: VideoListComponent
    }
    , {
        path: 'video/create', component: VideoCreateComponent
    }

    ,
    {
        path: 'video/edit', component: VideoUpdateComponent
    }
    ,
    {
        path: '**', redirectTo: ''
    }
];
