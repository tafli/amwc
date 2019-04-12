import { environment } from '../../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

import { Location } from '../../mower.model';
import { latLng, polyline, Polyline, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mower-map',
  templateUrl: './mower-map.component.html',
  styleUrls: [ './mower-map.component.css' ]
})
export class MowerMapComponent implements OnInit {
  @Input() locations: Location[];

  osMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  esriMaps = tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="http://www.esri.com/">Esri</a>',
    maxZoom: 18,
  });

  mapBox = tileLayer('https://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}{r}.png?access_token=' + environment.MAP_BOX_TOKEN, {
  });

  route: Polyline;

  options = {
    layers: [ this.mapBox ],
    zoom: 18,
    minZoom: 18,
    maxZoom: 22,
    center: latLng(47.26621, 8.19835)
  };

  constructor() {
  }

  ngOnInit() {
    this.route = polyline(this.locations.map(
      (location) => latLng(location.latitude, location.longitude)
    ));
  }
}
