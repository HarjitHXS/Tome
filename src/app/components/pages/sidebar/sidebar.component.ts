import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
  overlayVisible: boolean = false;

  toggleOverlay(display: boolean): void {
    this.overlayVisible = display;
  }

}
