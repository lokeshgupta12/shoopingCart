import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1itemsComponent } from './comp1items/comp1items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CartDataComponent } from './cart-data/cart-data.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { LoginComponent } from './login/login.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
{path:'', component:Comp1itemsComponent },
{path:'itemDetail/:id',component:ItemDetailComponent},
{path:'cartData',component:CartDataComponent},
{path:'paymentPage',component:PaymentPageComponent},
{path:'login',component:LoginComponent},
{path:'loginAdmin',component:LoginAdminComponent},
{path:'admin',component:AdminComponent}

// {path:'home/:id',component:HomeComponent },

];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
