import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { routing, appRoutingProviders } from './app.routing';
import { AcercaComponent } from './acerca/acerca.component';
import { ServicioComponent } from './servicio/servicio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PreciosComponent } from './precios/precios.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    AcercaComponent,
    ServicioComponent,
    GaleriaComponent,
    PreciosComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
