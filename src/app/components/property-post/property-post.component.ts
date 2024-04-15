import { Component } from '@angular/core';

@Component({
  selector: 'app-property-post',
  templateUrl: './property-post.component.html',
  styleUrl: './property-post.component.css'
})
export class PropertyPostComponent {

  uniqueId: number = Math.floor(Math.random() * 1000); // Generate a random ID
}
