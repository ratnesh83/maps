import { Component, OnInit } from '@angular/core';
declare var google;
declare var jsts;

@Component({
  selector: 'app-intersect',
  templateUrl: './intersect.component.html',
  styleUrls: ['./intersect.component.css']
})
export class IntersectComponent implements OnInit {

  ngOnInit(){
    this.initMap();
  }

  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: { lat: 24.886, lng: -70.268 },
      mapTypeId: google.maps.MapTypeId.TERRAIN
    });
  
    // Define the LatLng coordinates for the polygon's path.
    var bermudaCoords = [
      { lat: 25.774, lng: -80.190 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.190 }
    ];
  
    // Construct the polygon.
    var bermudaTriangle = new google.maps.Polygon({
      paths: bermudaCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    bermudaTriangle.setMap(map);
  
    // Construct another polygon.
    var anotherCoords = [
      { lat: 25.774, lng: -85.101 },
      { lat: 35.406, lng: -85.101 },
      { lat: 35.406, lng: -54.127 },
      { lat: 25.774, lng: -60.010 }
    ];
  
    var anotherArea = new google.maps.Polygon({
      paths: anotherCoords,
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.35
    });
    anotherArea.setMap(map);
  
  
  
    //calc polygons intersection
  }
  
}
