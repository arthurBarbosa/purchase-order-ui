import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { OrderConfirmactionPage } from "./order-confirmaction";
import { PedidoService } from "../../services/domain/pedido.service";

@NgModule({
  declarations: [OrderConfirmactionPage],
  imports: [IonicPageModule.forChild(OrderConfirmactionPage)],
  providers: [PedidoService]
})
export class OrderConfirmactionPageModule {}
