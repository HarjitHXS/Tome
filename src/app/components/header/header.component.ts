import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {UserService} from "./user-service.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: `./header.component.html`,
  styleUrl: `./header.component.css`
})
export class HeaderComponent implements OnInit {
  userName: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(name => this.userName = name);
  }
}
