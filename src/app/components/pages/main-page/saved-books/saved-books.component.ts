import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-saved-books',
  templateUrl: './saved-books.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./saved-books.component.css']
})
export class SavedBooksComponent {
  savedBooks: any[] = []; // Assuming savedBooks is an array of book objects

  constructor(private router: Router) {}


}
