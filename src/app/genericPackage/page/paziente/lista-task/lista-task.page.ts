import { Component, OnInit,Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { Task } from 'src/app/models/task';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-task',
  templateUrl: './lista-task.page.html',
  styleUrls: ['./lista-task.page.scss'],
})
export class ListaTaskPage implements OnInit {
  
  @Input() noLeftIcon:boolean=false;
  @Input() noRightIcon:boolean=false;
  public title = "Lista task";
  originalItems : Task[] =[]
  filterItems : Task[] =[]
  searchText = "";
  constructor(private navCtrl: NavController, public globalService: GlobalService, private rubyService: RubyApiService, public alertController: AlertController) { 

  }

  
  async presentAlertConfirm(task) {
    if(this.globalService.currentUser.user_type == 2){
      const alert = await this.alertController.create({
        header: 'Attenzione!',
        message: 'Vuoi cancellare questo task?',
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
              this.deleteTask(task)
            }
          }
        ]
      });
  
      await alert.present();
    }
  }

  deleteTask(task){
    this.rubyService.delete_task(task.id).subscribe(
      data => {
        console.log(data);
        this.originalItems = this.originalItems.filter(obj => obj !== task);
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

  ngOnInit() {
    this.getListaTask()
  }

  inserisciTask(){
    this.globalService.modify=false;
    this.navCtrl.navigateRoot('/new-task');
  }

  getListaTask() {
    
    this.rubyService.get_tasks(this.globalService.currentPatient.id).subscribe(
      data => {
        let response : any = [];
        response = data  
        console.log(response);
        
        this.globalService.currentPatient.tasks = []
        for(let item of response){
          this.globalService.currentPatient.tasks.push(item)
        }
        
        this.originalItems = this.globalService.currentPatient.tasks
        this.filterItems = this.globalService.currentPatient.tasks
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

  openTask(task) {
    this.globalService.currentTask= task;
    this.navCtrl.navigateRoot('/tabs-dettagli-task/tabDettagli');
  }

  prepareSearchData(){
    this.filterItems = []
    this.filterItems = this.originalItems
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
  getItems(ev: any) {
    // Reset items back to all of the items
    this.prepareSearchData();
  
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val &&val.trim() != '') {
    this.filterItems = this.filterItems.filter((item) => {
      return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
    }
  }
}
