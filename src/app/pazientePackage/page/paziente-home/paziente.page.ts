import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';

@Component({
  selector: 'app-paziente',
  templateUrl: './paziente.page.html',
  styleUrls: ['./paziente.page.scss'],
})
export class PazientePage implements OnInit {

  constructor(private navCtrl: NavController, public global: GlobalService, private rubyService: RubyApiService) { }

  ngOnInit() {
    this.getListaTask()
  }
  TaskListPage() {
    this.navCtrl.navigateRoot('/lista-task');
  }
  alleanzaPage(){
    this.navCtrl.navigateRoot('alleanza');
  }
  comportamentiProblemaPage(){
    
  }

  getListaTask() {
    
    this.rubyService.get_tasks(this.global.currentPatient.id).subscribe(
      data => {
        let response : any = [];
        response = data  
        console.log(response)
        this.global.currentPatient.tasks = []
        for(let item of response){
          this.global.currentPatient.tasks.push(item.task)
        }
        
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

  openTask(task) {
    this.global.currentTask= task;
    this.navCtrl.navigateRoot('/tabs-dettagli-task/tabDettagli');
  }
}
