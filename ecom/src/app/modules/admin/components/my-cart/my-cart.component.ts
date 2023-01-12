import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  // public count:any;

  constructor(public cartService:CartService) { }

  ngOnInit(): void {


    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.products = res;
    //   console.log(this.products)
    //   this.grandTotal = this.cartService.getTotalPrice();
    // })

    
// console.log(this.cartService.getProducts)
// console.log(this.cartService)
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      console.log(this.products)
      this.grandTotal = this.cartService.getTotalPrice();

      // this.count=this.cartService.getItemCount();
    })

  }


 

  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
   
    this.cartService.removeAllCart();
   
  }

}
