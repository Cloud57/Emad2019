import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { UiComponentsModule } from '../../../../ui-components/ui-components.module';

import { TabsDettagliTaskPage } from './tabs-dettagli-task.page';

const routes: Routes = [
  {

    path: 'tabs-dettagli-task',
    component: TabsDettagliTaskPage,
    children: [
      {
        path: 'tabDettagli',
        loadChildren: '../tab-dettagli/tab-dettagli.module#TabDettagliPageModule'

      },

      {
        path: 'tabGuida',
        loadChildren: '../tab-guida/tab-guida.module#TabGuidaPageModule'
      },

      {
        path: 'tabReport',
        loadChildren: '../tab-report/tab-report.module#TabReportPageModule'

      },


    ]
  },
  {
    path: '',
    redirectTo: '/tabs-dettagli-task/tab-dettagli',
    pathMatch: 'full'
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
  declarations: [TabsDettagliTaskPage]
})
export class TabsDettagliTaskPageModule {}
