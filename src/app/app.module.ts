import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LocationOneComponent } from './components/location-one/location-one.component';
import { CardoneComponent } from './components/cardone/cardone.component';
import { LocationTwoComponent } from './components/location-two/location-two.component';
import { LocationThreeComponent } from './components/location-three/location-three.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LocationOneComponent,
    CardoneComponent,
    LocationTwoComponent,
    LocationThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
