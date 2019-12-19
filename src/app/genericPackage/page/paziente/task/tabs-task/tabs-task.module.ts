import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsTaskPage } from './tabs-task.page';

const routes: Routes = [
  {
    path: 'tabs-task',
    component: TabsTaskPage,
    children: [
      {
        path: 'tabDet',
        loadChildren: '../tab-task1/tab-task1.module#TabTask1PageModule'
      },
      {
        path: 'tabGuida',
        loadChildren: '../tab-task2/tab-task2.module#TabTask2PageModule'
      },

      { path: 'tabRep',
        loadChildren: '../tab-task3/tab-task3.module#TabTask3PageModule' },


    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsTaskPage]
})
export class TabsTaskPageModule {}
