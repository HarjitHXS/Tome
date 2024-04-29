import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-announcements-page',
  standalone: true,
  imports: [NgIf,SidebarComponent],
  templateUrl: `./announcements.component.html`,
  styleUrl: `./announcements.component.css`
})
export class announcementsComponent {
    // announcements: any[] = [];

    // constructor() { }
  
    // ngOnInit(): void {
    //   // This would be replaced with a call to a service that fetches the actual announcements
    //   this.announcements = [
    //     { message: 'Reading workshop on Friday, register now.' },
    //     { message: 'Library closed on Monday.' }
    //   ];
    // }
}
