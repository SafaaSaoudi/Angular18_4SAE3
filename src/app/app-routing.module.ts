import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsuggestionsComponent } from './core/listsuggestions/listsuggestions.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

const routes: Routes = [
  {path:'suggestions', component:ListsuggestionsComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
