import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AlgoritmoComponent } from './components/algoritmo/algoritmo.component';
import { PrediccionComponent } from './components/prediccion/prediccion.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'alumnos', component: AlumnosComponent },
    { path: 'profesores', component: ProfesoresComponent },
    { path: 'prediccion', component: PrediccionComponent },
    { path: 'algoritmo/:idalgoritmo', component: AlgoritmoComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
