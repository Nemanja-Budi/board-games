import { Component, inject } from '@angular/core';
import { Observable, concatMap } from 'rxjs';
import { Game } from '../model/game';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent {
  gameService: GameService = inject(GameService);
  activatedRouter: ActivatedRoute = inject(ActivatedRoute);
  game: Observable<Game> = this.activatedRouter.paramMap.pipe(concatMap((param) => {
    const id = param.get('id');
    return this.gameService.getGame(Number(id));
  }));
}
