import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { AlertService } from 'src/app/service/alert.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-esecuzione-task',
  templateUrl: './esecuzione-task.page.html',
  styleUrls: ['./esecuzione-task.page.scss'],
})
export class EsecuzioneTaskPage implements OnInit {
  title=""
  is_executed;
  reportForm: FormGroup;
  constructor(public global:GlobalService, private navCtrl:NavController,private rubyService:RubyApiService,
              public alertService:AlertService,
              private fb:FormBuilder) { 
              this.reportForm = fb.group({
                is_executed: ['', Validators.required],
                date_execution: ['', Validators.required],
                duration: ['', Validators.required],
                description: ['', Validators.required]
                });

                if(this.global.modify){
                  this.title="Modifica Report"
                  this.reportForm.setValue({
                    is_executed: this.global.currentReport.is_executed+"",
                    date_execution: this.global.currentReport.date_execution,
                    duration: this.global.currentReport.duration,
                    description: this.global.currentReport.description
                  })
                this.is_executed = this.global.currentReport.is_executed;
                } else {
                  this.title="Inserisci Report"
                  
                }
                
              }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.back()
  }

  newReport(form: NgForm){
    console.log(form)
    if(form.valid){
      if(!this.global.modify){
      this.rubyService.new_Report(form.value, this.global.currentUser.id,this.global.currentTask.id).subscribe(
        data => {
          this.alertService.presentToast("Report creato");
          this.global.currentTask.last_exec_time= form.value.duration
          this.goBack()
        },
        error => {
          console.log(error);
          this.alertService.presentToast("Errore nell'inserimento del report");
        },
        () => {
  
        }
      );
    } else {
      this.rubyService.mod_Report(form.value, this.global.currentReport.id).subscribe(
        data => {
          this.alertService.presentToast("Report modificato");
          this.global.currentReport.is_executed = Boolean(JSON.parse(this.reportForm.value.is_executed)); 
          this.global.currentReport.duration = this.reportForm.value.duration
          this.global.currentReport.description = this.reportForm.value.description
          this.global.currentReport.date_execution = this.reportForm.value.date_execution
          this.global.currentTask.last_exec_time= form.value.duration
          this.goBack()
        },
        error => {
          console.log(error);
          this.alertService.presentToast("Errore nella modifica del report");
        },
        () => {
  
        }
      );
    }
    } else {
      this.alertService.presentToast("Campi obbligatori non compilati");
    }

  }
}
