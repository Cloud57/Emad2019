import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EsecuzioneTaskPage } from './esecuzione-task.page';

const routes: Routes = [
  {
    path: '',
    component: EsecuzioneTaskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EsecuzioneTaskPage]
})
export class EsecuzioneTaskPageModule {}
