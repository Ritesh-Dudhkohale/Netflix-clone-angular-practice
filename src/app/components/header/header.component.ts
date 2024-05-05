import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('navLinks') navLinks!: ElementRef;

  toggleNav() {
    this.navLinks.nativeElement.style.display =
      this.navLinks.nativeElement.style.display === 'none' ? 'block' : 'none';
  }
}
