import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {AuthService} from "../../auth.service";
import {Subscription} from "rxjs";
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        RouterLink,
        NgIf,
        MatIcon
    ],
  templateUrl: `./header.component.html`,
  styleUrl: `./header.component.css`
})
export class HeaderComponent implements OnInit, OnDestroy {
    isLoggedIn: boolean = false;
    private subscription: Subscription = new Subscription();

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.subscription = this.authService.isLoggedIn.subscribe(loggedIn => {
            this.isLoggedIn = loggedIn;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}