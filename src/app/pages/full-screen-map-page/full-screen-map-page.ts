import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-full-screen-map-page',
  imports: [],
  templateUrl: './full-screen-map-page.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }
  `
})
export class FullScreenMapPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');

  async ngAfterViewInit() {
    if( !this.divElement()?.nativeElement ) return;

    // await new Promise((resolve) => setTimeout(() => resolve, 80))

    const element = this.divElement()?.nativeElement;

    console.log(element)

    const map = new mapboxgl.Map({
    container: element, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});
  }


}
