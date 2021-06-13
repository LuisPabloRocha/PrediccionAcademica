import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { LoginComponent } from './components/login/login.component';
import { AlgoritmoComponent } from './components/algoritmo/algoritmo.component';
import { PrediccionComponent } from './components/prediccion/prediccion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CircleprogressComponent } from './components/circleprogress/circleprogress.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { NavsidebarComponent } from './components/navsidebar/navsidebar.component';
import { ModeloComponent } from './components/modelo/modelo.component';

import {NgxSpinnerModule} from 'ngx-spinner'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { InterceptorService } from './services/interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AlumnosComponent,
    LoginComponent,
    AlgoritmoComponent,
    PrediccionComponent,
    CircleprogressComponent,
    ProfesoresComponent,
    NavsidebarComponent,
    ModeloComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    NgbModule,
    FontAwesomeModule,
    ChartsModule,
    RoundProgressModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders,
    {provide : HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
