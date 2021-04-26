import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MonthlyPaymentsComponent } from './components/monthly-payments/monthly-payments.component';
import { LoanCalculatorComponent } from './components/loan-calculator/loan-calculator.component';
import { NetProfitComponent } from './components/net-profit/net-profit.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopNavComponent,
    MonthlyPaymentsComponent,
    LoanCalculatorComponent,
    NetProfitComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
