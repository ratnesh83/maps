import { Component } from '@angular/core';
declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(){
    this.initMap();
  }


  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });

    var drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon']
      },
      markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
      circleOptions: {
        fillColor: '#ffff00',
        fillOpacity: 1,
        strokeWeight: 5,
        clickable: false,
        editable: true,
        zIndex: 1
      },
      polygonOptions:{
        strokeWeight:5,
        editable:true
      }
    });
    drawingManager.setMap(map);
    

    

    google.maps.event.addListener(drawingManager, 'polygoncomplete', (polygon) => {
      drawingManager.setDrawingMode(null);
    
      var arr = [];
      // polygon.overlay.set('editable', true);
      polygon.getPath().forEach((latLng,path) => {
        arr.push({
          lat: latLng.lat(),
          lng: latLng.lng()
        });
        google.maps.event.addListener(path, 'insert_at', function(){
          // New point
        });
      
        google.maps.event.addListener(path, 'remove_at', function(){
          // Point was removed
        });
      
        google.maps.event.addListener(path, 'set_at', function(){
          // Point was moved
        });
      
      });
      
      google.maps.event.addListener(polygon, 'dragend', function(){
        // Polygon was dragged
      });
  
      console.log("COORDINATES: ", arr);

   });
    
     
    
  }

  
  
}
