import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/games/model/cart';
import { CartItem } from 'src/app/games/model/cart-item';
import { Game } from 'src/app/games/model/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @Input() game: Game = new Game();
  @Input() width: string = '8ch';

  cartForm: FormGroup;
  gameService: GameService = inject(GameService);
  roter: Router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    this.cartForm = this.formBuilder.group({
      count: [1, Validators.required],
    });
  }

  disabledForm(): void {
    if (this.game.available_count <= 0) {
      console.log(this.game.available_count);
      this.cartForm.get('count')?.disable();
    }
  }

  onSubmit(): void {
    if (!this.cartForm.valid && !this.game) return;
    const obj: { game: Game, count: number } = {
      game: new Game(this.game),
      count: this.cartForm.value['count']
    }
    const newCartItem = new CartItem(obj);
    this.gameService.newCartItem(newCartItem).subscribe((value) => {
      this.roter.navigate(['/cart'])
    });
  }

  ngOnInit(): void {
    this.disabledForm();
  }
}
