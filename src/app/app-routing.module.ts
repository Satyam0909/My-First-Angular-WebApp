import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalINFOComponent } from './additional-info/additional-info.component';
import { ExplanationsComponent } from './explanations/explanations.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'Additional-INFO', component: AdditionalINFOComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Explanations', component: ExplanationsComponent},
  {path: 'About', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
