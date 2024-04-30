import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);

  getCartItems() {
    return this.cartItems.asObservable();
  }

  addToCart(item: any) {
    const currentItems = this.cartItems.getValue();
    currentItems.push(item);
    this.cartItems.next(currentItems);
  }
}