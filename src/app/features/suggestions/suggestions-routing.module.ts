import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsuggestionsComponent } from './listsuggestions/listsuggestions.component';
import { AddSuggestionComponent } from './add-suggestion/add-suggestion.component';
import { DetailsSuggestionComponent } from './details-suggestion/details-suggestion.component';
import { SuggFormComponent } from './sugg-form/sugg-form.component';


const routes: Routes = [
  {path:'', component:ListsuggestionsComponent,
      children:[{path:'details/:param', component:DetailsSuggestionComponent}
      ], data: { status: 'update '}
  
    },
    {path:'add', component:SuggFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
