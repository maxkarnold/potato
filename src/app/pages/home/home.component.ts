import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  constructor() {
    this.resizeObservable$ = new Observable<Event>();
    this.resizeSubscription$ = new Subscription();
  }

  ngOnInit(): void {
    // temporary solution
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(() => {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  ngOnDestroy(): void {
    this.resizeSubscription$.unsubscribe();
  }
}
