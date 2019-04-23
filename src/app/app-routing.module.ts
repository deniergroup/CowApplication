import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CowInfoComponent } from './cow-info/cow-info.component';
import { CowsMothersInfoComponent } from './cows-mothers-info/cows-mothers-info.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShowCowsComponent } from './show-cows/show-cows.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

 

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'checkout-page',
    component: CheckoutPageComponent
  },
  {
    path: 'cow-info',
    component: CowInfoComponent
  },
  {
    path: 'cows-mothers-info',
    component: CowsMothersInfoComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'reservation-page',
    component: ReservationPageComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'show-cows',
    component: ShowCowsComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
