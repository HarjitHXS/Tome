import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<string>("");
  currentUser = this.user.asObservable();

  constructor() { }

  updateUser(name: string) {
    this.user.next(name);
  }
}