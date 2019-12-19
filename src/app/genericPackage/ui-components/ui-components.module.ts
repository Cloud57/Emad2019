import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonMenuComponent } from './ion-menu/ion-menu.component';



@NgModule({
  declarations: [ToolbarComponent,IonMenuComponent],
  exports: [ToolbarComponent,IonMenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class UiComponentsModule { }
