import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { WhiteBoxComponent } from './white-box/white-box.component';

const routes: Routes = [
  { path: 'dashboard', component: AppComponent },
  {
    path: 'white-box',
    component: WhiteBoxComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
