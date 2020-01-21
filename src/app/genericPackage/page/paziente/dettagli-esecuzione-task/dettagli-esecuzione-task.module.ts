import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DettagliEsecuzioneTaskPage } from './dettagli-esecuzione-task.page';
import { UiComponentsModule } from '../../../ui-components/ui-components.module';
const routes: Routes = [
  {
    path: '',
    component: DettagliEsecuzioneTaskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DettagliEsecuzioneTaskPage]
})
export class DettagliEsecuzioneTaskPageModule {}
