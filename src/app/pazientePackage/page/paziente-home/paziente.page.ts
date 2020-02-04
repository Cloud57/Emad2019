import { Component, OnInit,Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';

@Component({
  selector: 'app-paziente',
  templateUrl: './paziente.page.html',
  styleUrls: ['./paziente.page.scss'],
})
export class PazientePage implements OnInit {
  @Input() noLeftIcon:boolean=false;
  @Input() noRightIcon:boolean=false;
  
    title:string="Profilo Paziente";
  constructor(private navCtrl: NavController, public global: GlobalService, private rubyService: RubyApiService) { 

    this.global.currentPatient.setProfileIcon()
  }

  ngOnInit() {
    this.getListaTask()
    console.log(this.global.currentPatient);
  }
  TaskListPage() {
    this.navCtrl.navigateRoot('/lista-task');
  }
  alleanzaPage(){
    this.navCtrl.navigateRoot('alleanza');
  }
  comportamentiProblemaPage(){
    this.navCtrl.navigateRoot('/com-problema');
  }
  openProfile(){
    this.navCtrl.navigateRoot('profilo-caregiver');
  }

  openProfilePaziente(){
    this.navCtrl.navigateRoot('profilo-paziente');
  }
 goBack(){
   this.navCtrl.navigateRoot('doctor-home');
 }
  getListaTask() {
    
    this.rubyService.get_tasks(this.global.currentPatient.id).subscribe(
      data => {
        let response : any = [];
        response = data  
        console.log(response)
        this.global.currentPatient.tasks = []
        for(let item of response){
          this.global.currentPatient.tasks.push(item)
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
