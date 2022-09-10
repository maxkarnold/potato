import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './pages/bio/bio.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { LogComponent } from './pages/log/log.component';

const routes: Routes = [
  { path: 'bio', component: BioComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'log', component: LogComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
