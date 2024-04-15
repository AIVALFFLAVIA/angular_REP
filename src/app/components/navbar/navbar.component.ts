import { Component } from '@angular/core';
import { ScrollService } from '../../../app/services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public searchpropertyCategory = "";

  constructor(private scrollService: ScrollService) { }

  onAboutUsClick() {
    this.scrollService.scrollToFooter();
  }

}
