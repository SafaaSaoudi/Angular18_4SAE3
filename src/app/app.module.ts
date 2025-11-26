import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ListsuggestionsComponent } from './core/listsuggestions/listsuggestions.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { CardComponent } from './core/card/card.component';
import { AddSuggestionComponent } from './core/add-suggestion/add-suggestion.component';
import { DetailsSuggestionComponent } from './core/details-suggestion/details-suggestion.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListsuggestionsComponent,
    NotfoundComponent,
    CardComponent,
    AddSuggestionComponent,
    DetailsSuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
