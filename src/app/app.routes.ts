import { Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {TermsOfUseComponent} from "./components/pages/terms-of-use/terms-of-use.component";
import {PrivacyStatementComponent} from "./components/pages/privacy-statement/privacy-statement.component";
import {TeamComponent} from "./components/pages/team/team.component";
import {ContactComponent} from "./components/pages/contact/contact.component";
import {LoginComponent} from "./components/pages/home/login/login.component";
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ReceiptsComponent } from './components/pages/receipts/receipts.component';
import { BookNotAvailableComponent } from './components/pages/booknotavailable/booknotavailable.component';
import { CheckBookAvailableComponent } from './components/pages/checkbookavailability/checkbookavailability.component';
import { BookListComponent } from './components/pages/booklist/booklist.component';
import { BookReceiptComponent } from './components/pages/bookreceipt/bookreceipt.component';
function ProfileComponent() {

}

export const routes: Routes = [{
    path: 'home',
    component: HomeComponent},
    {path: 'about',
    component: AboutComponent},
    {path: 'main-page',
    component: DashboardComponent},
    {path: 'receipts',
    component: ReceiptsComponent},
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
    {path: 'booknotavailable',
        component:BookNotAvailableComponent
    },
    {path: 'checkbookavailability',
        component:CheckBookAvailableComponent
    },
    {
        path: 'booklist',
        component:BookListComponent
    },
    {
        path:'bookreceipt',
        component:BookReceiptComponent
    },

    {
        path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}];
