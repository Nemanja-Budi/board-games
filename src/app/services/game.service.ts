import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { GameList } from '../games/model/game-list';
import { Game } from '../games/model/game';
import { CartItem } from '../games/model/cart-item';
import { Cart } from '../games/model/cart';
import { Order } from '../games/model/order';

export type SortingQP = {
  sort: string;
  sortDirection: string;

  filter: {
    name: string;
    priceFrom: number;
    priceTo: number;
    availableOnly: boolean;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  quearyParams: SortingQP = {
    sort: 'price',
    sortDirection: '',

    filter: {
      name: '',
      priceFrom: 0,
      priceTo: 100000,
      availableOnly: false,
    }
  }

  quearyParamsSubject: BehaviorSubject<SortingQP> = new BehaviorSubject<SortingQP>(this.quearyParams);
  constructor(private http: HttpClient) { }

  getGames(): Observable<GameList> {
    return this.quearyParamsSubject.pipe(
      switchMap(params => {
        const options = {
          params: new HttpParams()
            .set('sort', params.sort || "")
            .set('sortDirection', params.sortDirection || "")
            .set('filter', params.filter && JSON.stringify(params.filter) || "")
        };
        return this.http.get<GameList>(`http://localhost:3000/api/games`, options);
      })
    );
  }

  getGame(game_id: number): Observable<Game> {
    return this.http.get<Game>(`http://localhost:3000/api/games/${game_id}`);
  }

  newCartItem(cartItem: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(`http://localhost:3000/api/cart/items`, cartItem)
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<Cart>(`http://localhost:3000/api/cart`).pipe(map((cart) => cart.items));
  }

  delteCartItem(id: number): Observable<CartItem> {
    return this.http.delete<CartItem>(`http://localhost:3000/api/cart/items/${id}`);
  }

  newOrder(newOrder: Order): Observable<Order> {
    return this.http.post<Order>(`http://localhost:3000/api/orders`, newOrder)
  }
}
