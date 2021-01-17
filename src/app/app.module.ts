import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewContactoComponent } from './components/new-contacto/new-contacto.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ListContactosComponent } from './components/list-contactos/list-contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    NewContactoComponent,
    ContactosComponent,
    ListContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
