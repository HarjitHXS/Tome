import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { UserService } from '../../../header/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2, private userService: UserService) {}

  ngAfterViewInit(): void {
    const form = this.el.nativeElement.querySelector('.form');

    this.addEvent('.show-signup', () => {
      this.resetClass(form, 'signin');
      this.resetClass(form, 'reset');
      this.renderer.addClass(form, 'signup');
    });

    this.addEvent('.show-signin', () => {
      this.resetClass(form, 'signup');
      this.resetClass(form, 'reset');
      this.renderer.addClass(form, 'signin');
    });

    this.addEvent('.show-reset', () => {
      this.resetClass(form, 'signup');
      this.resetClass(form, 'signin');
      this.renderer.addClass(form, 'reset');
    });
  }

  private addEvent(selector: string, callback: () => void): void {
    this.el.nativeElement.querySelector(selector).addEventListener('click', callback);
  }

  private resetClass(element: HTMLElement, className: string): void {
    this.renderer.removeClass(element, className);
  }
}