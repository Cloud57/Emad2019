import { UiComponentsModule } from './../ui-components/ui-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PazientePage } from './paziente.page';

const routes: Routes = [
  {
    path: '',
    component: PazientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PazientePage]
})
export class PazientePageModule {}
