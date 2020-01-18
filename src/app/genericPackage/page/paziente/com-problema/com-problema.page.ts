import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-com-problema',
  templateUrl: './com-problema.page.html',
  styleUrls: ['./com-problema.page.scss'],
})
export class ComProblemaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  newCompProblema() {
    this.navCtrl.navigateRoot('/new-com-problema');
  }

}
