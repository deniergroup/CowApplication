import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ShowCowsComponent } from './show-cows/show-cows.component';
import { CowInfoComponent } from './cow-info/cow-info.component';
import { CowsMothersInfoComponent } from './cows-mothers-info/cows-mothers-info.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    AboutUsComponent,
    ReservationPageComponent,
    CheckoutPageComponent,
    ShowCowsComponent,
    CowInfoComponent,
    CowsMothersInfoComponent,
    ShoppingCartComponent,
    ProfileComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
