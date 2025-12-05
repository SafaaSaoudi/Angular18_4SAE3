import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { AddSuggestionComponent } from './add-suggestion/add-suggestion.component';
import { DetailsSuggestionComponent } from './details-suggestion/details-suggestion.component';
import { ListsuggestionsComponent } from './listsuggestions/listsuggestions.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddSuggestionComponent,
    DetailsSuggestionComponent,
    ListsuggestionsComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    FormsModule
  ]
})
export class SuggestionsModule { }
