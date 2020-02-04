import { Problem_behaviour } from 'src/app/models/Problem_behaviour';
import { ModalFiltriPage } from './modal-filtri/modal-filtri.page';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { GlobalService } from 'src/app/service/global.service';
import { Filter } from 'src/app/models/filter';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-com-problema',
  templateUrl: './com-problema.page.html',
  styleUrls: ['./com-problema.page.scss'],
})
export class ComProblemaPage implements OnInit {
  title="Comportamento problema"
  originalItems : Problem_behaviour[] =[]
  filterItems : Problem_behaviour[] =[]
  constructor(private navCtrl: NavController, private rubyService:RubyApiService,
              public globalService: GlobalService,private modalController: ModalController, public alertController: AlertController ) { 
                this.globalService.currentFilter = new Filter()
              }


  ngOnInit() {
    this.getListaProblem()
  }

  async presentAlertConfirm(comp) {
      const alert = await this.alertController.create({
        header: 'Attenzione!',
        message: 'Vuoi cancellare questo comportamento?',
        buttons: [
          {
            text: 'Annulla',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              
            }
          }, {
            text: 'Conferma',
            handler: () => {
              this.deleteComp(comp)
            }
          }
        ]
      });
  
      await alert.present();
  }

  deleteComp(comp){
    this.rubyService.delete_comp(comp.id).subscribe(
      data => {
        console.log(data);
        this.originalItems = this.originalItems.filter(obj => obj !== comp);
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

  openProfile(){
    this.navCtrl.navigateRoot('/profilo-caregiver');
  }
  goBack(){
    if(this.globalService.currentUser.user_type ==0)
        this.navCtrl.navigateRoot('/paziente-home');
    else
        this.navCtrl.navigateRoot('/profilo-paziente');
  }
  async openModal() {

    const modal = await this.modalController.create({
      component: ModalFiltriPage
    });
    modal.onDidDismiss().then (data =>{
      console.log("dismiss")
      this.getItems()
    });

    return await modal.present();

  }
  newCompProblema() {
    this.globalService.modify=false
    this.navCtrl.navigateRoot('/new-com-problema/tabCp');
  }

  openProblem(problem) {
    console.log(problem);
    
    this.globalService.currentProblem=problem
    this.navCtrl.navigateRoot('/dettagli-comportamento-problema');
  }

  getListaProblem() {
    this.rubyService.get_problem(this.globalService.currentPatient.id).subscribe(
      data => {
        let response : any = [];
        response = data   
        this.originalItems =response
        this.filterItems = response
        console.log(response)
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

  prepareSearchData(){
    this.filterItems = []
    this.filterItems = this.originalItems
  }

  getItems() {
    // Reset items back to all of the items
    this.prepareSearchData();
    let filter1 = this.globalService.currentFilter.date
    let filter2 = this.globalService.currentFilter.intesity
    let filter3 = this.globalService.currentFilter.type
    
    if(filter1 != null){
    let filterDate = new Date(filter1);
    this.filterItems = this.filterItems.filter((item) => {
      let problemDate = new Date(item.date);
      return (filterDate.getDate() == problemDate.getDate() 
      && filterDate.getMonth() == problemDate.getMonth() 
      && filterDate.getFullYear() == problemDate.getFullYear());
    })
  }
  if(filter2 != null){
    this.filterItems = this.filterItems.filter((item) => {
      console.log("filter2 "+filter2)
      console.log("filter2 "+item.intensity)
      return (item.intensity == filter2);
    })
    console.log("filter2 "+this.filterItems)
  }
  if(filter3 != null){
    this.filterItems = this.filterItems.filter((item) => {
      return (item.name == ''+filter3);
    })
    console.log("filter3 "+this.filterItems)
  }

  }

  deleteFilter(n){
    if(n == 0){
       this.globalService.currentFilter.type = null
    } else if(n==1){
      this.globalService.currentFilter.date = null
    } else if(n==2){
      this.globalService.currentFilter.intesity = null
    }
    this.getItems()
  }

}
