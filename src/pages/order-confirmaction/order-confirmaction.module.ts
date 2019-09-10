import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderConfirmactionPage } from './order-confirmaction';

@NgModule({
  declarations: [
    OrderConfirmactionPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderConfirmactionPage),
  ],
})
export class OrderConfirmactionPageModule {}
