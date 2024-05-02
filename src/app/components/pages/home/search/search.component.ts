import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-search',
  standalone: true,
    imports: [
        NgForOf,
        NgIf,
        RouterLink
    ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  tabs = ['Catalog', 'Site'];
  selectedTab = this.tabs[0];
}