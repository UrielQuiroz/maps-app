import { Routes } from '@angular/router';
import { FullScreenMapPageComponent } from './pages/full-screen-map-page/full-screen-map-page';
import { MarkersPageComponet } from './pages/markers-page/markers-page';
import { HousesPageComponent } from './pages/houses-page/houses-page';

export const routes: Routes = [
  {
    path: 'fullscreen',
    component: FullScreenMapPageComponent,
    title: 'FullScreen Map'
  },
  {
    path: 'markers',
    component: MarkersPageComponet,
    title: 'Markers'
  },
    {
    path: 'houses',
    component: HousesPageComponent,
    title: 'Houses Available'
  },
    {
    path: '**',
    redirectTo: 'fullscreen'
  }
];
