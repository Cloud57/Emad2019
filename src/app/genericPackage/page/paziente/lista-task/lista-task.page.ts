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
