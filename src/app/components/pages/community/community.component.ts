import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: `./community.component.html`,
  styleUrl: `./community.component.css`
})
export class CommunityComponent {

}
