import { Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {TermsOfUseComponent} from "./components/pages/terms-of-use/terms-of-use.component";
import {PrivacyStatementComponent} from "./components/pages/privacy-statement/privacy-statement.component";
import {TeamComponent} from "./components/pages/team/team.component";
import {ContactComponent} from "./components/pages/contact/contact.component";
import {LoginComponent} from "./components/pages/home/login/login.component";
import {MainPageComponent} from "./components/pages/main-page/main-page.component";
import {DashboardComponent} from "./components/pages/main-page/dashboard/dashboard.component";
import {CheckoutComponent} from "./components/pages/main-page/checkout/checkout.component";
import {ReceiptsComponent} from "./components/pages/main-page/receipts/receipts.component";
import {HelpPageComponent} from "./components/pages/main-page/help-page/help-page.component";
import {AnnouncementsComponent} from "./components/pages/main-page/annoucements/announcements.component";
import {SavedBooksComponent} from "./components/pages/main-page/saved-books/saved-books.component";
import {SettingComponent} from "./components/pages/main-page/setting/setting.component";
import {LogoutComponent} from "./components/pages/home/logout/logout.component";


function ProfileComponent() {

}

export const routes: Routes = [{
    path: 'home',
    component: HomeComponent},
    {path: 'about',
    component: AboutComponent},

    {path: 'terms',
    component: TermsOfUseComponent},
    {path: 'team',
        component: TeamComponent},
    {path: 'contact',
        component: ContactComponent},
    {path: 'login',
    component: LoginComponent},
    {path: 'privacy',
    component: PrivacyStatementComponent},
    {path: 'main-page',
        component: MainPageComponent},
    {path: "dashboard",
    component: DashboardComponent},
    {path:"checkout",
    component: CheckoutComponent},
    {path:'receipts',
    component: ReceiptsComponent},
    {path: 'help-page',
    component: HelpPageComponent},
    {path: 'announcements',
    component: AnnouncementsComponent},
    {path: 'saved-books',
    component: SavedBooksComponent},
    {path: 'settings',
    component: SettingComponent},
    {path: 'logout',
    component: LogoutComponent},

    {
        path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}];
