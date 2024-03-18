import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {

  gameService: GameService = inject(GameService);
  games: Observable<Game[]> = this.gameService.getGames().pipe(map((games) => games.results));

}
