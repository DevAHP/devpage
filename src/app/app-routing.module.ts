import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThanksComponent } from './components/thanks/thanks.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'thanks', component: ThanksComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
