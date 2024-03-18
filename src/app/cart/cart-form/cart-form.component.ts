import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/games/model/order';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent {
  @Input() isEmpty: boolean = false;
  @Input() isAveleble: boolean = false;

  cartForm: FormGroup;
  gameService: GameService = inject(GameService);
  router: Router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    this.cartForm = this.formBuilder.group({
      name: ['',Validators.required],
      address: ['',Validators.required],
      e_mail: ['', [Validators.required, Validators.email]],
      tel: ['',Validators.required],
    });
  }

  onSubmit(): void {
    if(!(this.cartForm.valid && this.isEmpty && this.isAveleble)) return;
    const newOrder = new Order(this.cartForm.value);
    this.gameService.newOrder(newOrder).subscribe((value) => {
      this.router.navigate(['/games']);
      this.cartForm.reset();
    });
    
  }
}
