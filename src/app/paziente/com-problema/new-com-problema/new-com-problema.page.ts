import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-com-problema',
  templateUrl: './new-com-problema.page.html',
  styleUrls: ['./new-com-problema.page.scss'],
})
export class NewComProblemaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  comProblemaPage() {
    this.navCtrl.navigateRoot('/com-problema');
  }
}
