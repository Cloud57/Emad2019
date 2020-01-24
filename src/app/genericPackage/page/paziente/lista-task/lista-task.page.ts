import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';

@Component({
  selector: 'app-lista-task',
  templateUrl: './lista-task.page.html',
  styleUrls: ['./lista-task.page.scss'],
})
export class ListaTaskPage implements OnInit {
  public response : any = [];
  public title = "Lista task"
  originalItems : any =[]
  searchText = "";
  constructor(private navCtrl: NavController, private globalService: GlobalService, private rubyService: RubyApiService) { 

  }

  ngOnInit() {
    this.getListaTask()
  }

  inserisciTask(){
    this.navCtrl.navigateRoot('/new-task');
  }

  getListaTask() {
    
    this.rubyService.get_tasks(this.globalService.currentPatient.id).subscribe(
      data => {
        this.response = data   
        this.originalItems = data
        console.log(this.response)
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

  openTask(task) {
    this.globalService.currentTask= task.task;
    this.globalService.currentTask.reports = task.reports
    this.navCtrl.navigateRoot('/tabs-dettagli-task/tabDettagli');
  }

  prepareSearchData(){
    this.response = []
    this.response = this.originalItems
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.prepareSearchData();
  
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val &&val.trim() != '') {
    this.response = this.response.filter((item) => {
      return (item.task.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
    }
  }
}
