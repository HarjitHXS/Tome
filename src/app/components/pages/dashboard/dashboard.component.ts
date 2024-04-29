import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  showTableView: boolean = false;

  constructor() { }

  toggleViews(): void {
    this.showTableView = !this.showTableView;
    console.log(this.showTableView)
    
  }

  handleEnterKey(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.toggleViews();
      (event.target as HTMLInputElement).value = ''; // Clear the input field
    }
  }
}
