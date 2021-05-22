import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlgoritmoComponent } from './components/algoritmo/algoritmo.component';
import { PrediccionComponent } from './components/prediccion/prediccion.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BarchartComponent } from './components/barchart/barchart.component';
import { CircleprogressComponent } from './components/circleprogress/circleprogress.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { NavsidebarComponent } from './components/navsidebar/navsidebar.component';
import { ModeloComponent } from './components/modelo/modelo.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    AlumnosComponent,
    LoginComponent,
    FooterComponent,
    AlgoritmoComponent,
    PrediccionComponent,
    BarchartComponent,
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
    RoundProgressModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
