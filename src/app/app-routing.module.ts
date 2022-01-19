import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotaComponent } from './pilota/pilota.component';

const routes: Routes = [
  {
    path: "",
    component: PilotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
