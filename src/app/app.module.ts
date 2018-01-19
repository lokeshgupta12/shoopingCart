import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Comp1itemsComponent } from './comp1items/comp1items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CombinedService } from './combined.service';
import { CartDataComponent } from './cart-data/cart-data.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { LoginComponent } from './login/login.component';
import { FilterPipe } from './filter.pipe';
import { AdminComponent } from './admin/admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Comp1itemsComponent,
    ItemDetailComponent,
    CartDataComponent,
    PaymentPageComponent,
    LoginComponent,
    FilterPipe,
    AdminComponent,
    LoginAdminComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    // NgbModule
  ],
  providers: [ CombinedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
