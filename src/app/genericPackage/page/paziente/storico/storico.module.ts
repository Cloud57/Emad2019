import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StoricoPage } from './storico.page';
import {StarRatingModule} from 'ionic4-star-rating';

const routes: Routes = [
  {
    path: '',
    component: StoricoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StoricoPage]
})
export class StoricoPageModule {}
