import { UiComponentsModule } from '../../../genericPackage/ui-components/ui-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DoctorHomePage } from './doctor-home.page';
const routes: Routes = [
  {
    path: '',
    component: DoctorHomePage
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
  declarations: [DoctorHomePage]
})
export class DoctorHomePageModule {}
