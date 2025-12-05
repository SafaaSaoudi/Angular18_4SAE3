import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { CardComponent } from './core/card/card.component';

import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  
  //{path:'suggestions/details/:id', component:DetailsSuggestionComponent},
  {path:'card', component:CardComponent},
  //path pour le module user lazy loading
  { path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) },
  { path: 'suggestions', loadChildren: () => import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule) },
 
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
