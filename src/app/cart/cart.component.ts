import { Component, OnInit, inject } from '@angular/core';
import { CartItem } from '../games/model/cart-item';
import { GameService } from '../services/game.service';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  gameService: GameService = inject(GameService);
  isEmpty: boolean = false;
  isAveleble: boolean = false;
  
  carts: Observable<CartItem[]> = this.gameService.getCartItems().pipe(tap((value) => {
    if(value.length > 0) {
      this.isEmpty = true;
    }
    return value;
  }));
  ukupnaCena: number = 0;
  
  countPrice(): void {
    this.carts.pipe(tap((cart) => cart.forEach((c) => {
      this.ukupnaCena += c.count * c.game.price;
      this.isAveleble = c.available;
    }))).subscribe();
  }

  onRemoveCartItem(cart_id: number): void {
    this.gameService.delteCartItem(cart_id).subscribe((value) => {
      this.carts = this.gameService.getCartItems();
      this.countPrice();
    });
  }

  ngOnInit(): void {
    this.countPrice();
  }

}
