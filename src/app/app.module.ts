import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { PropertyPostComponent } from './components/property-post/property-post.component';
import { AppRoutesModules } from './modules/app.routes';
import { BuyerComponent } from './components/buyer/buyer.component';
import { SellerComponent } from './components/seller/seller.component';
import { BuyerSellerComponent } from './components/buyer-seller/buyer-seller.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreatePropertyComponent } from './components/create-property/create-property.component';
import { UpdatePropertyComponent } from './components/update-property/update-property.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ReservationRequestsComponent } from './components/reservation-requests/reservation-requests.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { MyReservationComponent } from './components/my-reservation/my-reservation.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    PropertyDetailsComponent,
    PropertyPostComponent,
    BuyerComponent,
    SellerComponent,
    BuyerSellerComponent,
    AdminComponent,
    CreatePropertyComponent,
    UpdatePropertyComponent,
    LoginComponent,
    ReservationRequestsComponent,
    NotAuthorizedComponent,
    ReservationsComponent,
    MyReservationComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModules,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
