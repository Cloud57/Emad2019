import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewComProblemaPage } from './new-com-problema.page';

const routes: Routes = [
  {
    path: 'new-com-problema',
    component: NewComProblemaPage,
    children: [
      {
        path: 'tabCp',
        loadChildren: '../tab-cp/tab-cp.module#TabCpPageModule'
      },
      {
        path: 'tabMisure',
        loadChildren: '../tab-misure/tab-misure.module#TabMisurePageModule'
      },

      { path: 'tabCause',
        loadChildren: '../tab-cause/tab-cause.module#TabCausePageModule' },


    ]
  },
  {
  path: '',
  redirectTo: '/tabs/tab1',
  pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewComProblemaPage]
})
export class NewComProblemaPageModule {}
