import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class CartMockService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);

//   constructor() { }

  getProducts(){
    return of([
        {
          id: 1,
          body: 'body 1',
          title: 'title 1',
        },
        {
          id: 2,
          body: 'body 2',
          title: 'title 2',
        },
        {
          id: 3,
          body: 'body 3',
          title: 'title 3',
        },
      ]);
  }




  addtoCart(product : any){


    const isFound=this.cartItemList.findIndex((a:any)=>{
           
   
      return a.id === product.id;
    })

    if(isFound === -1){
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
    
      console.log(this.cartItemList);
    }else{
  
    product.quantity=product.quantity+1;
    product.total=product.total+product.price

      this.productList.next(this.cartItemList);
      console.log(this.cartItemList)
    }

    this.getTotalPrice();

   
  }
//   getTotalPrice() : number{
//     let grandTotal = 0;
//     this.cartItemList.map((a:any)=>{

//       grandTotal += a.total;
   
//     })
//     return grandTotal;
//   }

  getTotalPrice() : number{
    let grandTotal = 10;

    return grandTotal;
  }




  getItemCount():any{
 
    let totalCartCount=0;
    this.cartItemList.map((item:any)=>{
       totalCartCount=totalCartCount+item.quantity;
    })
    return totalCartCount;

  }


  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){

        if(product.quantity > 1){
   // this.cartItemList.splice(index,1)
   product.quantity=product.quantity - 1;
   product.total=product.total - product.price;
        }else{
           this.cartItemList.splice(index,1)
        }
     
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }



}
