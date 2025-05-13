import { Component, HostListener, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShrunk = false;

  ngOnInit() {
    this.updateShrinkState();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onWindowEvent() {
    this.updateShrinkState();
  }

  private updateShrinkState() {
    const isMobile = window.innerWidth <= 768;
    const isScrolled = window.scrollY > 60;

    this.isShrunk = isMobile || isScrolled;

    const header = document.querySelector('.app-bar');
    if (header) {
      header.classList.toggle('shrink', this.isShrunk);
    }
  }
}
