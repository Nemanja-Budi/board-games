import { Component, inject } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-filtering',
  templateUrl: './game-filtering.component.html',
  styleUrls: ['./game-filtering.component.css']
})
export class GameFilteringComponent {

  gameService: GameService = inject(GameService);
  isChecked: boolean = false;

  onGetSearchText(searchText: string): void {
    this.gameService.quearyParamsSubject.next(
      {
        ...this.gameService.quearyParamsSubject.value,
        filter: {
          name: searchText,
          priceFrom: this.gameService.quearyParams.filter.priceFrom,
          priceTo: this.gameService.quearyParams.filter.priceTo,
          availableOnly: this.gameService.quearyParams.filter.availableOnly
        }
      }
    );
  }

  onGetPriceFrom(priceFrom: string): void {
    let pF = (Number(priceFrom) * 100);
    this.gameService.quearyParamsSubject.next(
      {
        ...this.gameService.quearyParamsSubject.value,
        filter: {
          name: this.gameService.quearyParams.filter.name,
          priceFrom: pF,
          priceTo: this.gameService.quearyParams.filter.priceTo,
          availableOnly: this.gameService.quearyParams.filter.availableOnly
        }
      }
    );
  }

  onGetPriceTo(priceTo: string): void {
    let pT = (Number(priceTo) * 100);
    this.gameService.quearyParamsSubject.next(
      {
        ...this.gameService.quearyParamsSubject.value,
        filter: {
          name: this.gameService.quearyParams.filter.name,
          priceFrom: this.gameService.quearyParams.filter.priceFrom,
          priceTo: pT,
          availableOnly: this.gameService.quearyParams.filter.availableOnly
        }
      }
    );
  }

  onGetChecked(): void {
    this.isChecked = !this.isChecked;
    this.gameService.quearyParamsSubject.next(
      {
        ...this.gameService.quearyParamsSubject.value,
        filter: {
          name: this.gameService.quearyParams.filter.name,
          priceFrom: this.gameService.quearyParams.filter.priceFrom,
          priceTo: this.gameService.quearyParams.filter.priceTo,
          availableOnly: this.isChecked
        }
      }
    );
  }
}
