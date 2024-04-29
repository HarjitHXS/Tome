import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {TermsOfUseComponent} from "./components/pages/terms-of-use/terms-of-use.component";
import {PrivacyStatementComponent} from "./components/pages/privacy-statement/privacy-statement.component";
import {TeamComponent} from "./components/pages/team/team.component";
import {ContactComponent} from "./components/pages/contact/contact.component";
import {SearchComponent} from "./components/pages/home/search/search.component";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./components/pages/home/login/login.component";
import { MatTabsModule } from '@angular/material/tabs';
import { SidebarComponent } from './components/pages/sidebar/sidebar.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ReceiptsComponent } from './components/pages/receipts/receipts.component';
import { LogoutComponent } from './components/pages/logoutpage/logoutpage.component';
import { announcementsComponent } from './components/pages/announcements/announcements.component';
import { CommunityComponent } from './components/pages/community/community.component';
import { EventspageComponent } from './components/pages/eventspage/eventspage.component';
import { GroupsComponent } from './components/pages/groups/groups.component';


@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: './app.component.html',
  styles: [],
  imports: [
    CommonModule,
    HeaderComponent,
    HomeComponent,
      AboutComponent,
      TermsOfUseComponent,
      TeamComponent,
      ContactComponent,
      SearchComponent,
      PrivacyStatementComponent,
      LoginComponent,
    RouterOutlet,
    FooterComponent,
    MatTabsModule,
    SidebarComponent,
    DashboardComponent,
    ReceiptsComponent,
    LogoutComponent,
    announcementsComponent,
    CommunityComponent,
    EventspageComponent, 
    GroupsComponent
    

  ]
})


export class AppComponent {
  title = 'tome';
}
