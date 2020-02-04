import { ModalFiltriPage } from './modal-filtri/modal-filtri.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComProblemaPage } from './com-problema.page';
import { UiComponentsModule } from '../../../ui-components/ui-components.module';
import { PipesModule } from 'src/app/genericPackage/pipe/pipes/pipes.module';
import { LongPressModule } from 'ionic-long-press';


const routes: Routes = [
  {
    path: '',
    component: ComProblemaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiComponentsModule,
    PipesModule,
    IonicModule,
    LongPressModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComProblemaPage,ModalFiltriPage],
  entryComponents:[ModalFiltriPage]
})
export class ComProblemaPageModule {}
