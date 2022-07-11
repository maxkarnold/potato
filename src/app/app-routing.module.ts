import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './pages/bio/bio.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'bio', component: BioComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
