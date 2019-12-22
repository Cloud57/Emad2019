import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UiComponentsModule } from '../../../ui-components/ui-components.module';

import { IonicModule } from '@ionic/angular';

import { ProfiloPazientePage } from './profilo-paziente.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiloPazientePage
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
  declarations: [ProfiloPazientePage]
})
export class ProfiloPazientePageModule {}
