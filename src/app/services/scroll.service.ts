import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new Subject<void>();

  scrollToFooter() {
    this.scrollSubject.next();
  }

  getScrollSubject() {
    return this.scrollSubject.asObservable();
  }
}
