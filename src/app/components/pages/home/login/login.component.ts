import { Component } from '@angular/core';

import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {AuthService} from "../../../../auth.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    MatTabLabel,
    RouterLink
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onLoginClick() {
    this.authService.login();
  }
}