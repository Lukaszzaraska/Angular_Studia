import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { MediumCardComponent } from './medium-card/medium-card.component';
import { GroupCardsComponent } from './group-cards/group-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallCardComponent,
    MediumCardComponent,
    GroupCardsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




