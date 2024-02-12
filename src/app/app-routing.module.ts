import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCandidatureComponent } from './components/post-candidature/post-candidature.component';
import { GetAllCandidaturesComponent } from './components/get-all-candidatures/get-all-candidatures.component';



const routes: Routes = [
    //routes
  { path: '', redirectTo: '/candidatures', pathMatch: 'full' },
  {path:'savecandidature',component:PostCandidatureComponent},
  {path:'candidatures',component:GetAllCandidaturesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
