import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameListComponent } from './games/game-list/game-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { GameItemComponent } from './games/game-list/game-item/game-item.component';
import { GameSortingComponent } from './games/game-list/game-sorting/game-sorting.component';
import { GameFilteringComponent } from './games/game-list/game-filtering/game-filtering.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameFormComponent } from './games/game-list/game-item/game-form/game-form.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { CartComponent } from './cart/cart.component';
import { CartFormComponent } from './cart/cart-form/cart-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    GameListComponent,
    GameItemComponent,
    GameSortingComponent,
    GameFilteringComponent,
    GameFormComponent,
    GameDetailComponent,
    CartComponent,
    CartFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
