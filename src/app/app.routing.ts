// IMPORTAMOS MODULOS DEL ROUTER DE ANGULAR
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NgModule } from '@angular/core';


// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';




// Array de rutas
const appRoutes: Routes = [
	{path: '', component: InicioComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: '**', component: InicioComponent}
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);