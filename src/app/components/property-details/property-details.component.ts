import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent {

  propertyId = '';
  constructor (private _activedRoute: ActivatedRoute){
    this._activedRoute.params.subscribe((p) => {
      this.propertyId = p["id"];
    })
  }
}
