import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabReportPage } from './tab-report.page';
import { LongPressModule } from 'ionic-long-press';
const routes: Routes = [
  {
    path: '',
    component: TabReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LongPressModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabReportPage]
})
export class TabReportPageModule {}
