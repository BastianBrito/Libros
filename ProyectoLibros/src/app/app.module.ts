import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }from "@angular/common/http";

import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    DetalleLibroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
