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
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";

import {NgIf} from "@angular/common";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {ReceiptsComponent} from "./receipts/receipts.component";
import {HelpPageComponent} from "./help-page/help-page.component";
import {AnnouncementsComponent} from "./annoucements/announcements.component";
import {SavedBooksComponent} from "./saved-books/saved-books.component";
import {SettingComponent} from "./setting/setting.component";



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

        NgIf,
        DashboardComponent,
        CheckoutComponent,
        ReceiptsComponent,
        HelpPageComponent,
        AnnouncementsComponent,
        SavedBooksComponent,
        MatIconButton,
        SettingComponent,


    ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  showDashboard =   true;
  showReceipts = false;
  showCheckout = false;
    showHelp = false;
    showSavedBooks = false;
    showSettings = false;
    showannouncements = false;
}