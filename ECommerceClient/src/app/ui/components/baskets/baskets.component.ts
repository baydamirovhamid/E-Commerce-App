import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { Update_Basket_Item } from '../../../contracts/basket/update_basket_item';
import { List_Basket_Item } from '../../../contracts/basket/list_basket_item';
import { BasketService } from '../../../services/common/models/basket.service';
import { Create_Order } from '../../../contracts/order/create_order';
import { OrderService } from '../../../services/common/models/order.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../services/ui/custom-toastr.service';
import { Router } from '@angular/router';
import { DialogService } from '../../../services/common/dialog.service';
import { BasketItemDeleteState, BasketItemRemoveDialogComponent } from '../../../dialogs/basket-item-remove-dialog/basket-item-remove-dialog.component';
import { ShoppingCompleteDialogComponent, ShoppingCompleteState } from '../../../dialogs/shopping-complete-dialog/shopping-complete-dialog.component';

declare var $: any;


@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrl: './baskets.component.scss'
})
export class BasketsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private basketService: BasketService, private orderService: OrderService, private toastrService: CustomToastrService, private router: Router, private dialogService: DialogService) {
    super(spinner)
  }

  basketItems: List_Basket_Item[];

  async ngOnInit(): Promise<void> {
    this.showSpinner(SpinnerType.BallAtom)
    this.basketItems = await this.basketService.get()
    this.hideSpinner(SpinnerType.BallAtom)
  }

  async changeQuantity(object: any) {
    this.showSpinner(SpinnerType.BallAtom)
    const basketItemId: string = object.target.attributes["id"].value;
    const quantity: number = object.target.value;
    const basketItem: Update_Basket_Item = new Update_Basket_Item();
    basketItem.basketItemId = basketItemId;
    basketItem.quantity = quantity;
    await this.basketService.updateQuantity(basketItem);
    this.hideSpinner(SpinnerType.BallAtom)
  }

  async removeBasketItem(basketItemId: string) {
    $("#basketModal").modal("hide");
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();

    this.dialogService.openDialog({
      componentType: BasketItemRemoveDialogComponent,
      data: BasketItemDeleteState.Yes,
      afterClosed: async () => {
        this.showSpinner(SpinnerType.BallScaleMultiple);
        await this.basketService.remove(basketItemId);

        var a = $("." + basketItemId)
        $("." + basketItemId).fadeOut(500, () => this.hideSpinner(SpinnerType.BallAtom));
        $("#basketModal").modal("show");
      }
    });
  }

  async shoppingComplete() {
    $("#basketModal").modal("hide");
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();

    this.dialogService.openDialog({
      componentType: ShoppingCompleteDialogComponent,
      data: ShoppingCompleteState.Yes,
      afterClosed: async () => {
        this.showSpinner(SpinnerType.BallAtom);
        const order: Create_Order = new Create_Order();
        order.address = "Address 1";
        order.description = "Description 1";
        await this.orderService.create(order);
        this.hideSpinner(SpinnerType.BallAtom);
        this.toastrService.message("The order has been received!", "The order was created!", {
          messageType: ToastrMessageType.Info,
          position: ToastrPosition.TopRight
        })
        this.router.navigate(["/"]);
      }
    });


  }
}
