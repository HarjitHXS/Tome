import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [SidebarComponent,NgIf],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BookListComponent {

}