import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StoricoEsecuzioneTaskPage } from './storico-esecuzione-task.page';

const routes: Routes = [
  {
    path: '',
    component: StoricoEsecuzioneTaskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StoricoEsecuzioneTaskPage]
})
export class StoricoEsecuzioneTaskPageModule {}
