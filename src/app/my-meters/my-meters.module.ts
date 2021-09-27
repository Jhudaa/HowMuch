import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMetersPageRoutingModule } from './my-meters-routing.module';

import { MyMetersPage } from './my-meters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMetersPageRoutingModule
  ],
  declarations: [MyMetersPage]
})
export class MyMetersPageModule {}
