import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsuggestionsComponent } from './listsuggestions/listsuggestions.component';
import { AddSuggestionComponent } from './add-suggestion/add-suggestion.component';
import { DetailsSuggestionComponent } from './details-suggestion/details-suggestion.component';


const routes: Routes = [
  {path:'', component:ListsuggestionsComponent,
      children:[{path:'details/:param', component:DetailsSuggestionComponent},
                {path:'add', component:AddSuggestionComponent}
      ], data: { status: 'update '}
  
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
