import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  screenWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 800) {
      this.isHidden = false;
      this.isMobile = false;
    } else {
      this.isHidden = true;
      this.isMobile = true;
    }
  }

  isMobile = true;
  isHidden = true;
  constructor(private route: ActivatedRoute) {
    this.onResize();
   }

  ngOnInit(): void {
  }

  toggleNav() {
    if (this.isMobile) {
      this.isHidden = this.isHidden ? false : true; 
    }
  }
}
