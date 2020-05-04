import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { TotalcasesComponent } from './totalcases/totalcases.component';
import { ChartsModule } from 'ng2-charts';
import { WorldwidecasesComponent } from './worldwidecases/worldwidecases.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroductionComponent,
    TotalcasesComponent,
    WorldwidecasesComponent
  ],
  imports: [
    ChartsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
