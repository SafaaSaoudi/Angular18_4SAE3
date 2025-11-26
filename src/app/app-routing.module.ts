import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsuggestionsComponent } from './core/listsuggestions/listsuggestions.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { CardComponent } from './core/card/card.component';
import { AddSuggestionComponent } from './core/add-suggestion/add-suggestion.component';
import { DetailsSuggestionComponent } from './core/details-suggestion/details-suggestion.component';

const routes: Routes = [
  {path:'', redirectTo:'suggestions', pathMatch:'full'},
  {path:'suggestions', component:ListsuggestionsComponent,
    children:[{path:'details/:param', component:DetailsSuggestionComponent},
              {path:'add', component:AddSuggestionComponent}
    ], data: { status: 'update '}

  },
  //{path:'suggestions/details/:id', component:DetailsSuggestionComponent},
  {path:'card', component:CardComponent},
  //path pour le module user lazy loading
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
 
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
