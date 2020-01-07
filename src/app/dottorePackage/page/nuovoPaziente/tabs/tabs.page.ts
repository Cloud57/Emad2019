import { SharedNewPazienteService } from './../shared-new-paziente.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
   
  constructor(private navCtrl: NavController, private sharedService: SharedNewPazienteService) { }

  ngOnInit() {
  }
  ionChange(myTabs) {
    
}
homePage() {
  this.navCtrl.navigateRoot('/doctor-home');
}
save(){
  console.log(this.sharedService.nomeCognome,this.sharedService.indirizzo, this.sharedService.dataNascita,this.sharedService.altezza, this.sharedService.peso,this.sharedService.diagnosi);
}
}
