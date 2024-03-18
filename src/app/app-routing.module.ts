import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './games/game-list/game-list.component';
import { ContactComponent } from './contact/contact.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: "contact", component: ContactComponent },
  { path: "games", component: GameListComponent },
  { path: "game-detail/:id", component: GameDetailComponent },
  { path: "cart", component: CartComponent },
  { path: "", redirectTo: "games", pathMatch: "prefix" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
