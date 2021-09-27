import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMetersPage } from './my-meters.page';

const routes: Routes = [
  {
    path: '',
    component: MyMetersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMetersPageRoutingModule {}
