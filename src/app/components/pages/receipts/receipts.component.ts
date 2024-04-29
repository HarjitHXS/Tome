import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-receipts',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './receipts.component.html',
  styleUrl: './receipts.component.css'
})
export class ReceiptsComponent {

}
