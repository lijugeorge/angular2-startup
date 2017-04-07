import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms'; 

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { ProductComponent }  from './product/product.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    ProductComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
