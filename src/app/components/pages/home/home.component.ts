import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForOf} from "@angular/common";
import {SearchComponent} from "./search/search.component";
import {RouterLink} from "@angular/router";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
    imports: [
        NgForOf,
        SearchComponent,
        RouterLink
    ],
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    books = [
        {
            title: 'Book Title 1',
            description: 'Book Description 1',
            imageUrl: 'https://example.com/image1.jpg'
        },
        {
            title: 'Book Title 2',
            description: 'Book Description 2',
            imageUrl: 'https://example.com/image2.jpg'
        },
        // Add more books as needed...
    ];
}