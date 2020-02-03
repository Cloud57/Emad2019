import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { EnvService } from 'src/app/service/env.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() title:string="";
  @Input() noLeftIcon:boolean=false;
  @Input() noRightIcon:boolean=false;
  constructor(private location:Location, private navCtrl : NavController, public env:EnvService, public globalService: GlobalService) { 
    console.log(this.noLeftIcon)
  }

  ngOnInit() {}

  goBack(){
    this.location.back();
  }

  openProfile(){
    this.navCtrl.navigateRoot('/profilo-caregiver');
  }
} 