import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterTabsComponent } from './character-tabs/character-tabs.component';
import { CharacterScreenComponent } from './character-screen/character-screen.component';
import { StatisticsPanelComponent } from './character-screen/statistics-panel/statistics-panel.component';
import { AttributesComponent } from './character-screen/attributes/attributes.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterTabsComponent,
    CharacterScreenComponent,
    StatisticsPanelComponent,
    AttributesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
