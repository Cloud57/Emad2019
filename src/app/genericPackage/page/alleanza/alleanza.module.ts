import { UiComponentsModule } from '../../../genericPackage/ui-components/ui-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlleanzaPage } from './alleanza.page';

const routes: Routes = [
  {
    path: '',
    component: AlleanzaPage
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
  declarations: [AlleanzaPage]
})
export class AlleanzaPageModule {}
