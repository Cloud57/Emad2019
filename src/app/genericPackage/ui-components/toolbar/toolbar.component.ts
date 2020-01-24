import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() title:string;
  @Input() leftIcon:number;
  @Input() rightIcon:number;
  constructor(private location:Location, private navCtrl : NavController, private globalService: GlobalService) { }

  ngOnInit() {}

  goBack(){
    this.location.back();
  }

  openProfile(){
    this.navCtrl.navigateRoot('/profilo-caregiver');
  }
} 