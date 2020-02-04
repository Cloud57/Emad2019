import { UiComponentsModule } from '../../../ui-components/ui-components.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaTaskPage } from './lista-task.page';
import { LongPressModule } from 'ionic-long-press';

const routes: Routes = [
  {
    path: '',
    component: ListaTaskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiComponentsModule,
    LongPressModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaTaskPage]
})
export class ListaTaskPageModule {}
