import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-booknotavailable',
  standalone: true,
  imports: [SidebarComponent,NgIf],
  templateUrl: './bookreceipt.component.html',
  styleUrl: './bookreceipt.component.css'
})
export class BookReceiptComponent {

}