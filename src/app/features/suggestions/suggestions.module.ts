import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { AddSuggestionComponent } from './add-suggestion/add-suggestion.component';
import { DetailsSuggestionComponent } from './details-suggestion/details-suggestion.component';
import { ListsuggestionsComponent } from './listsuggestions/listsuggestions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuggFormComponent } from './sugg-form/sugg-form.component';


@NgModule({
  declarations: [
    AddSuggestionComponent,
    DetailsSuggestionComponent,
    ListsuggestionsComponent,
    SuggFormComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SuggestionsModule { }
