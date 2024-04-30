import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-receipts',
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatButton,
    MatDrawer
  ],
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent {
  showFiller = false;
}
