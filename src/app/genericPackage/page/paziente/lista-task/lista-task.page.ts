import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-lista-task',
  templateUrl: './lista-task.page.html',
  styleUrls: ['./lista-task.page.scss'],
})
export class ListaTaskPage implements OnInit {
  public title = "Lista task"
  originalItems : Task[] =[]
  filterItems : Task[] =[]
  searchText = "";
  constructor(private navCtrl: NavController, public globalService: GlobalService, private rubyService: RubyApiService) { 

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
        this.globalService.currentPatient.tasks = []
        for(let item of response){
          this.globalService.currentPatient.tasks.push(item.task)
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
