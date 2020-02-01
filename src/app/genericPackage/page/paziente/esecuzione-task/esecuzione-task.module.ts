import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { UiComponentsModule } from '../../../ui-components/ui-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    UiComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EsecuzioneTaskPage]
})
export class EsecuzioneTaskPageModule {}
