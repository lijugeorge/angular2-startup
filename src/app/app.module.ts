import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms'; 
import { AppRoutingModule }   from './app-routing.module';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroesComponent } from './hero/heroes.component';
import { ProductComponent }  from './product/product.component';
import { DashboardComponent }  from './dashboard.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    ProductComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
