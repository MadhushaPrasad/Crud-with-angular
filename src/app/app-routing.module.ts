import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from "./views/customer/customer.component";
import {ItemComponent} from "./views/item/item.component";
import {OrdersComponent} from "./views/orders/orders.component";

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
