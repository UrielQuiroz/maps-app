import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-markers-page',
  imports: [],
  templateUrl: './markers-page.html',
})
export class MarkersPageComponet implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);

  ngAfterViewInit() {
    if( !this.divElement()?.nativeElement ) return;

    // await new Promise((resolve) => setTimeout(() => resolve, 80))

    const element = this.divElement()?.nativeElement;

    const map = new mapboxgl.Map({
        container: element, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [ -100.32329088532266, 25.685353505115582 ], // starting position [lng, lat]
        zoom: 14, // starting zoom
    });

    const marker = new mapboxgl.Marker({
      draggable: false,
      color: '#fbb400'
    })
      .setLngLat([ -100.32329088532266, 25.685353505115582 ])
      .addTo(map);

    marker.on('dragend', (event) => {
      console.log(event)
    })

    this.mapListeners(map);
  }

  mapListeners( map: mapboxgl.Map ) {
    console.log(map);
  }

}
