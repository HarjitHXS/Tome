import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-receipts',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent {

  showReceipts: boolean = false;
}
