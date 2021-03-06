import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from "./views/customer/customer.component";
import {ItemComponent} from "./views/item/item.component";
import {OrdersComponent} from "./views/orders/orders.component";
import {NoContentComponent} from "./views/no-content/no-content.component";
import {AuthGuard} from "./guard/auth-guard.service";

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'customer/:id',
    component: CustomerComponent,
  },
  {
    path: 'customer/:id/:name',
    component: CustomerComponent
  },
  {
    path: 'item',
    component: ItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'customer'
  }, {
    path: '**',
    component: NoContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
