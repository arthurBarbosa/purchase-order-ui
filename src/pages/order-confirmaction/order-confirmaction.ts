import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ClienteService } from "../../services/domain/cliente.service";
import { CartService } from "../../services/domain/cart.service";
import { PedidoDTO } from "../../models/pedido.dto";
import { CartItem } from "../../models/cart-item";
import { ClienteDTO } from "../../models/cliente.dto";
import { EnderecoDTO } from "../../models/endereco.dto";

/**
 * Generated class for the OrderConfirmactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-order-confirmaction",
  templateUrl: "order-confirmaction.html"
})
export class OrderConfirmactionPage {
  pedido: PedidoDTO;
  cartItems: CartItem[];
  cliente: ClienteDTO;
  endereco: EnderecoDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public clienteService: ClienteService,
    public cartService: CartService
  ) {
    this.pedido = this.navParams.get("pedido");
  }

  ionViewDidLoad() {
    this.cartItems = this.cartService.getCart().items;
    this.clienteService.findById(this.pedido.cliente.id).subscribe(
      response => {
        this.cliente = response as ClienteDTO;
        this.endereco = this.findEndereco(
          this.pedido.enderecoDeEntrega.id,
          response["enderecos"]
        );
      },
      error => {
        this.navCtrl.setRoot("HomePage");
      }
    );
  }

  private findEndereco(id: string, list: EnderecoDTO[]): EnderecoDTO {
    let position = list.findIndex(x => x.id == id);
    return list[position];
  }

  total(): number {
    return this.cartService.total();
  }
}
