import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [
        FormsModule,
        MatFormField,
        MatInput
    ],
  templateUrl: `./dashboard.component.html`,
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}