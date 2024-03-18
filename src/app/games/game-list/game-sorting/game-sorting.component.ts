import { Component, inject } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-sorting',
  templateUrl: './game-sorting.component.html',
  styleUrls: ['./game-sorting.component.css']
})
export class GameSortingComponent {

  gameService: GameService = inject(GameService);

  onGetSortingSelect(sortingSelect: string): void {
    this.gameService.quearyParamsSubject.next(
      {
        ...this.gameService.quearyParamsSubject.value,
        sortDirection: sortingSelect
      }
    )
  }
}
