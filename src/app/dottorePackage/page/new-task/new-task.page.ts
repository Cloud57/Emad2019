import { SharedIconService } from './shared-icon.service';
import { ModalPage } from './modal/modal.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { AlertService } from 'src/app/service/alert.service';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {
  taskForm: FormGroup;
  uploadVideoText: any;
  uploadAudioText: any;
  downloadText: any;
  fileTransferVideo: FileTransferObject;
  fileTransferAudio: FileTransferObject;
  title: string;
  autonomy: string;
  private fileVideoToUpload: any
  private videoBlob: Blob
  constructor(private modalController: ModalController, public sharedIService: SharedIconService, private alertService: AlertService,
    public rubyService: RubyApiService, private navCtrl: NavController, private global: GlobalService,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private transfer: FileTransfer,
    private fb:FormBuilder) {
    this.taskForm = fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required]
      });
    this.uploadVideoText = "";
    this.uploadAudioText = "";
    this.downloadText = "";
    if(this.global.modify){
      this.title = "Modifica task"
      this.sharedIService.src = this.global.currentTask.icon
      this.taskForm.setValue({
        name: this.global.currentTask.name,
        duration: this.global.currentTask.duration,
        description: this.global.currentTask.description
      })
      this.autonomy = this.global.currentTask.autonomy+""
    } else {
      this.title = "Nuovo task"
      this.sharedIService.src = "";

    }

  }
  async openModal() {

    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();

  }
  ngOnInit() {
  }

  listOfTask() {
    this.navCtrl.navigateRoot('/lista-task');
  }

  sendTask(form: NgForm) {
    console.log(form)
    if(!this.global.modify){
      this.rubyService.new_task(form.value, this.autonomy, this.global.currentPatient.id, this.sharedIService.src,this.videoBlob, this.fileVideoToUpload.name).subscribe(
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
   } else {
    this.rubyService.mod_task(form.value, Number(this.autonomy), this.global.currentPatient.id, this.sharedIService.src, this.global.currentTask.id).subscribe(
      data => {
        this.alertService.presentToast("Task modificato");
        this.global.currentTask.name = form.value.name
        this.global.currentTask.description = form.value.description
        this.global.currentTask.duration = form.value.duration
        this.global.currentTask.icon = this.sharedIService.src
        this.global.currentTask.autonomy = Number(this.autonomy)
        console.log(Number(this.autonomy));
        
        this.navCtrl.back()
      },
      error => {
        console.log(error);
      },
      () => {

      }
    );
   }
  }

  uploadVideo() {
    this.fileChooser.open().then((uri) => {
      this.filePath.resolveNativePath(uri).then(
        (nativepath) => {
          this.fileVideoToUpload = nativepath
          const reader = new FileReader();
          reader.onload = () => {
            this.videoBlob = new Blob([reader.result], {
                type: this.fileVideoToUpload.type
            });
            
        };
        reader.readAsArrayBuffer(this.fileVideoToUpload);
          /*
          this.fileTransferVideo = this.transfer.create();
          let options: FileUploadOptions = {
            fileKey: 'videofile',
            fileName: 'video.mp4',
            chunkedMode: false,
            headers: {},
            mimeType: 'video/mp4'
          }
          this.uploadVideoText = "uploading...";
          this.fileTransferVideo.upload(nativepath, 'your endpoint api path', options).then((data) => {
            alert("transfert done = " + JSON.stringify(data));
            this.uploadVideoText = "";

          }, (err) => {
            this.uploadVideoText = "";
          }) */
        }, (err) => {
          alert(JSON.stringify(err));
        })
    }, (err) => {
      alert(JSON.stringify(err));
    })
  }
  uploadAudio() {
    this.fileChooser.open().then((uri) => {
      this.filePath.resolveNativePath(uri).then(
        (nativepath) => {
          this.fileTransferAudio = this.transfer.create();
          let options: FileUploadOptions = {
            fileKey: 'audiofile',
            fileName: 'audio.mp3',
            chunkedMode: false,
            headers: {},
            mimeType: 'audio/mpeg'
          }
          this.uploadAudioText = "uploading...";
          this.fileTransferAudio.upload(nativepath, 'your endpoint api path', options).then((data) => {
            alert("transfert done = " + JSON.stringify(data));
            this.uploadAudioText = "";

          }, (err) => {
            this.uploadAudioText = "";
          })
        }, (err) => {
          alert(JSON.stringify(err));
        })
    }, (err) => {
      alert(JSON.stringify(err));
    })
  }

  AbortUploadAudio() {
    this.fileTransferAudio.abort();
    alert("upload cancel.");
  }
  AbortUploadVideo() {
    this.fileTransferVideo.abort();
    alert("upload cancel.");
  }


  goBack() {
    this.navCtrl.back();
  }

}
