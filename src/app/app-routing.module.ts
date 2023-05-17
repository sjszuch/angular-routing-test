import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationOneComponent } from './components/location-one/location-one.component';
import { LocationTwoComponent } from './components/location-two/location-two.component';
import { LocationThreeComponent } from './components/location-three/location-three.component';

const routes: Routes = [

  //first path
  { path: '', component: LocationOneComponent },

  //second
  { path: 'second', component: LocationTwoComponent },

  // third path
  { path: 'third', component: LocationThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
