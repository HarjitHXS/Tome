import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-booknotavailable',
  standalone: true,
  imports: [SidebarComponent,NgIf],
  templateUrl: './checkbookavailability.component.html',
  styleUrl: './checkbookavailability.component.css'
})
export class CheckBookAvailableComponent {

}