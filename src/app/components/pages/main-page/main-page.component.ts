import { Component } from '@angular/core';
import {
  MatDrawer,
  MatDrawerContainer,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent
} from "@angular/material/sidenav";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NgIf} from "@angular/common";
import {ReceiptsComponent} from "./receipts/receipts.component";
import {CheckoutComponent} from "./checkout/checkout.component";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatFormField,
    MatSelect,
    MatOption,
    MatDrawer,
    MatSidenav,
    MatSidenavContent,
    MatButton,
    MatSidenavContainer,
    MatIcon,
    MatDivider,
    MatListItem,
    RouterLink,
    MatNavList,
    RouterOutlet,
    DashboardComponent,
    NgIf,
    ReceiptsComponent,
    CheckoutComponent,

  ],
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  showDashboard = false;
  showReceipts = false;
    showCheckout = false;
}
