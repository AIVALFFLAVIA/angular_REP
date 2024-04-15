import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from '../../../app/services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit, OnDestroy{

  currentYear: number = new Date().getFullYear();

  private scrollSubscription!: Subscription;

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollSubscription = this.scrollService.getScrollSubject().subscribe(() => {
      this.scrollToAnchor();
    });
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  private scrollToAnchor() {
    const element = document.getElementById('footerAnchor');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
