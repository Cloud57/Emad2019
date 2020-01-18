import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComProblemaPage } from './com-problema.page';
import { UiComponentsModule } from '../../../ui-components/ui-components.module';
import { TransformTypePipe } from './transform-type.pipe';


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
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComProblemaPage, TransformTypePipe]
})
export class ComProblemaPageModule {}
