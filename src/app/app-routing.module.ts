import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TiempoComponent } from './components/tiempo/tiempo.component';

const routes: Routes = [
  { path : 'main', component:  MainComponent},
  { path : 'tiempo', component: TiempoComponent},
  { path : '', redirectTo: '/main', pathMatch: 'full'},
  { path : '**', component: MainComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot ( routes )

  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
