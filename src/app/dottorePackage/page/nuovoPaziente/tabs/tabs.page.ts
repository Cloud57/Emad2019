import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  ionChange(myTabs) {
    console.log(myTabs.getSelected());
}
homePage() {
  this.navCtrl.navigateRoot('/doctor-home');
}

save(){
  
}

}
