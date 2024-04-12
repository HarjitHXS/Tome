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

function ProfileComponent() {

}

export const routes: Routes = [{
    path: 'home',
    component: HomeComponent},
    {path: 'about',
    component: AboutComponent},
    {path: 'main-page',
    component: MainPageComponent},
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
    { path: 'dashboard', component: DashboardComponent },
    {path: 'checkout',
    component: CheckoutComponent},
    {
        path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}];
