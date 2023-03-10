import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [

  {path:"",component:DashboardComponent,

  },


  // {path:"products",component:ProductsComponent},
  {path:"admin",component:ProductsComponent},

  // {path:"details/:id",component:ProductDetailsComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"cart",component:MyCartComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
