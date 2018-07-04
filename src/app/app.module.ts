import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './bharat/menu/menu.component';
import { FormsModule }   from '@angular/forms';
import {routes} from './app.routes';
import { RouterModule } from "@angular/router";
//import { NewComponentComponent } from './bharat/new-component/new-component.component';
import { BalloonGalleryComponent } from './bharat/balloon-gallery/balloon-gallery.component';
import { CustomerComponent } from './bharat/customer/customer.component';
import { OccasionComponent } from './bharat/occasion/occasion.component';
import { HomeComponent } from './bharat/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    //NewComponentComponent,
    BalloonGalleryComponent,
    CustomerComponent,
    OccasionComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  //imports: [BrowserModule,BrowserAnimationsModule, RouterModule.forRoot(routes),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
