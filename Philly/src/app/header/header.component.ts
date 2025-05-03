import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isShrunk = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
  
    if (!this.isShrunk && scrollTop > 60) {
      this.isShrunk = true;
    } else if (this.isShrunk && scrollTop < 40) {
      this.isShrunk = false;
    }
  
    const header = document.querySelector('.app-bar');
    if (header) {
      header.classList.toggle('shrink', this.isShrunk);
    }
  }
}
