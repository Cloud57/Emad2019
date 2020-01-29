import { ModalPage } from './modal/modal.page';
import { UiComponentsModule } from './../../../genericPackage/ui-components/ui-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTaskPage } from './new-task.page';

const routes: Routes = [
  {
    path: '',
    component: NewTaskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewTaskPage, ModalPage],
  entryComponents:[ModalPage]
})
export class NewTaskPageModule {}
