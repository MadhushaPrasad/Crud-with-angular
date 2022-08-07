import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerComponent} from './views/customer/customer.component';
import {ItemComponent} from './views/item/item.component';
import {OrdersComponent} from './views/orders/orders.component';
import {HeaderComponent} from './views/common/header/header.component';
import {FooterComponent} from './views/common/footer/footer.component';
import {SidebarComponent} from './views/common/sidebar/sidebar.component';
import {NoContentComponent} from './views/no-content/no-content.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomPPipe} from './pipes/custom-p.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ItemComponent,
    OrdersComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NoContentComponent,
    CustomPPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
