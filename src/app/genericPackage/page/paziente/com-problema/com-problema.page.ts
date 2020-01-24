import { SharedFilterService } from './shared-filter.service';
import { ModalFiltriPage } from './modal-filtri/modal-filtri.page';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { GlobalService } from 'src/app/service/global.service';


@Component({
  selector: 'app-com-problema',
  templateUrl: './com-problema.page.html',
  styleUrls: ['./com-problema.page.scss'],
})
export class ComProblemaPage implements OnInit {
  response:any;
  title="Comportamento problema"
  constructor(private navCtrl: NavController, private rubyService:RubyApiService,
              private globalService: GlobalService,private modalController: ModalController,public sharedFilterService: SharedFilterService ) { }


  ngOnInit() {
    this.getListaProblem()
  }
  async openModal() {

    const modal = await this.modalController.create({
      component: ModalFiltriPage
    });
    return await modal.present();

  }
  newCompProblema() {
    this.navCtrl.navigateRoot('/new-com-problema');
  }

  openProblem(problem) {
    this.globalService.currentProblem=problem
    this.navCtrl.navigateRoot('/dettagli-comportamento-problema');
  }

  getListaProblem() {
    
    this.rubyService.get_problem(this.globalService.currentPatient.id).subscribe(
      data => {
        this.response = data   
        console.log(this.response)
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

}
