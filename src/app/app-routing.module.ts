import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component'
import {MonthlyPaymentsComponent} from './components/monthly-payments/monthly-payments.component'
import {LoanCalculatorComponent} from './components/loan-calculator/loan-calculator.component'
import {NetProfitComponent} from './components/net-profit/net-profit.component'
import {ProfileComponent} from './components/profile/profile.component'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent },
  {path: 'monthly', component: MonthlyPaymentsComponent},
  {path: 'loan', component: LoanCalculatorComponent},
  {path: 'net', component: NetProfitComponent},
  {path: 'net', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
