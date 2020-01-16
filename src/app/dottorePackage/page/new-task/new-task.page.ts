import { SharedIconService } from './shared-icon.service';
import { ModalPage } from './modal/modal.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { AlertService } from 'src/app/service/alert.service';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {File} from '@ionic-native/file/ngx';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {
  uploadText: any;
  downloadText: any;
  fileTransfer: FileTransferObject;


  constructor(private modalController: ModalController,
    private sharedIService: SharedIconService,
    private alertService: AlertService,
    public rubyService: RubyApiService, 
    private navCtrl: NavController, 
    private global: GlobalService,
    private transfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    private fileChooser: FileChooser)
    {
      this.uploadText="";
      this.downloadText="";
     }

     uploadFile(){
       this.fileChooser.open().then((uri)=>{
        this.filePath.resolveNativePath(uri).then(
          (nativepath)=>{
            this.fileTransfer = this.transfer.create();
            let options:FileUploadOptions={
              fileKey:'videofile',
              fileName: 'video.mp4',
              chunkedMode: false,
              headers:{},
              mimeType:'video/mp4'
            }
            this.uploadText="uploading...";
            this.fileTransfer.upload(nativepath,'your endpoint api path', options).then((data)=>{
              alert("transfert done = "+ JSON.stringify(data));
              this.uploadText = "";
              
            },(err)=>{
              this.uploadText = "";
            })
          },(err)=>{
            alert(JSON.stringify(err));
          })
       },(err)=>{
        alert(JSON.stringify(err));
      })
     }

     AbortUpload(){
       this.fileTransfer.abort();
       alert("upload cancel.");
     }
  async openModal(){
    
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
    
  }
  ngOnInit() {
    this.sharedIService.src="";
  }

  goBack(){
    this.navCtrl.back();
  }

  listOfTask(){
    this.navCtrl.navigateRoot('/lista-task');
  }

  newTask(form : NgForm){
    console.log(form)
    this.rubyService.new_task(form.value, this.global.currentPatient.id, this.sharedIService.src).subscribe(
      data => {
        this.alertService.presentToast("Task creato");
        this.listOfTask();
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

}
