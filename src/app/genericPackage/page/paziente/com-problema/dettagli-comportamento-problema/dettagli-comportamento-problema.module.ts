import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UiComponentsModule } from '../../../../ui-components/ui-components.module';

import { IonicModule } from '@ionic/angular';

import { DettagliComportamentoProblemaPage } from './dettagli-comportamento-problema.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliComportamentoProblemaPage
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
  declarations: [DettagliComportamentoProblemaPage]
})
export class DettagliComportamentoProblemaPageModule {}
