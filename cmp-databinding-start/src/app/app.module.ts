import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddServerFormComponent } from './add-server-form/add-server-form.component';
import { ServerItemComponent } from './server-item/server-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddServerFormComponent,
    ServerItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
