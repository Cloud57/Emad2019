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

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {

  uploadVideoText: any;
  uploadAudioText: any;
  downloadText: any;
  fileTransferVideo: FileTransferObject;
  fileTransferAudio: FileTransferObject;
  constructor(private modalController: ModalController, public sharedIService: SharedIconService, private alertService: AlertService,
    public rubyService: RubyApiService, private navCtrl: NavController, private global: GlobalService,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private transfer: FileTransfer) {
    this.uploadVideoText = "";
    this.uploadAudioText = "";
    this.downloadText = "";
  }
  async openModal() {

    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();

  }
  ngOnInit() {
    this.sharedIService.src = "";
  }

  listOfTask() {
    this.navCtrl.navigateRoot('/lista-task');
  }

  newTask(form: NgForm) {
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

  uploadVideo() {
    this.fileChooser.open().then((uri) => {
      this.filePath.resolveNativePath(uri).then(
        (nativepath) => {
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
          })
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
