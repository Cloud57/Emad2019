import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonMenuComponent } from './ion-menu/ion-menu.component';
import {AssistantComponent} from '../../assistant/assistant.component'


@NgModule({
  declarations: [ToolbarComponent,IonMenuComponent,AssistantComponent ],
  exports: [ToolbarComponent,IonMenuComponent,AssistantComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class UiComponentsModule { }
