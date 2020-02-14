import { SharedIconService } from './shared-icon.service';
import { ModalPage } from './modal/modal.page';
import { ModalController, LoadingController } from '@ionic/angular';
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
import { File } from '@ionic-native/file/ngx';
import { ChangeDetectorRef } from '@angular/core'

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
  public fileVideoToUpload: any
  public fileAudioToUpload: any
  public videoBlob: Blob = null;
  public audioBlob: Blob = null;

  public fileVideoToMod:number = null
  public fileAudioToMod:number = null
  spinner:any;
  constructor(private modalController: ModalController, public sharedIService: SharedIconService, private alertService: AlertService,
    public rubyService: RubyApiService, private navCtrl: NavController, private global: GlobalService,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private file:File,
    private fb:FormBuilder,
    private changeRef: ChangeDetectorRef,
    private loading: LoadingController) {
    this.taskForm = fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required]
      });
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
      if(this.global.currentTask.media_files.length > 0){
        for(let media of this.global.currentTask.media_files)
          if(media.media.includes("mp4"))
            this.fileAudioToMod = media.media_id
          else if(media.media.includes("aac") || media.media.includes("mp3"))
            this.fileVideoToMod = media.media_id
      }
    } else {
      this.title = "Nuovo task"
      this.sharedIService.src = "";

    }
    console.log(this.sharedIService.src);
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
    this.loading.create({
      message: "Attendi..."
    }).then((overlay) => {  
      this.spinner = overlay
      this.spinner.present();
      console.log(form)
      if(!this.global.modify){
        if (this.sharedIService.src=="")
        { 
          this.sharedIService.src="../assets/img/icon-modal/generic.png" 
          this.global.currentTask.icon = this.sharedIService.src
        }
      else{
        this.global.currentTask.icon = this.sharedIService.src
      } 
        this.rubyService.new_task(form.value, this.autonomy, this.global.currentPatient.id, this.sharedIService.src,this.videoBlob, this.fileVideoToUpload, this.audioBlob, this.fileAudioToUpload).subscribe(
          data => {
            this.alertService.presentToast("Task creato");
            this.listOfTask();
          },
          error => {
            console.log(error);
            this.spinner.dismiss();
          },
          () => {
            this.spinner.dismiss();
          }
        );
    } else {
      this.rubyService.mod_task(form.value, Number(this.autonomy), this.global.currentPatient.id, this.sharedIService.src, this.global.currentTask.id).subscribe(
        data => {
          this.alertService.presentToast("Task modificato");
          this.global.currentTask.name = form.value.name
          this.global.currentTask.description = form.value.description
          this.global.currentTask.duration = form.value.duration
          if (this.sharedIService.src=="")
        { 
          this.sharedIService.src="../assets/img/icon-modal/generic.png" 
          this.global.currentTask.icon = this.sharedIService.src
        }
      else{
        this.global.currentTask.icon = this.sharedIService.src
      } 
          this.global.currentTask.autonomy = Number(this.autonomy)
          
          this.goBack()
        },
        error => {
          console.log(error);
          this.spinner.dismiss();
        },
        () => {
          this.spinner.dismiss();
        }
      );
    }

  });
  }

  loadVideo(video: Blob, file: any){
    this.videoBlob = video
    this.uploadVideoText = file.name
    this.fileVideoToUpload = file.name
    this.changeRef.detectChanges();
  }

  uploadVideo() {
    this.fileChooser.open({ "mime": "video/mp4" }).then((uri) => {
      this.filePath.resolveNativePath(uri).then(
        (nativepath) => {
          this.file.resolveLocalFilesystemUrl(nativepath).then((entry:any) =>{
            entry.file(file => {
              this.uploadVideoText = "Video in caricamento..."
              this.changeRef.detectChanges();
              const reader = new FileReader();
              reader.onload = (e) => {
                this.loadVideo(new Blob([reader.result], {
                  type: file.type
              }), file)

            };
            reader.readAsArrayBuffer(file);
            })
          })

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
        })
    }, (err) => {
    })
  }
  uploadAudio() {
    this.fileChooser.open({ "mime": "audio/*" }).then((uri) => {
      this.filePath.resolveNativePath(uri).then(
        (nativepath) => {
          this.file.resolveLocalFilesystemUrl(nativepath).then((entry:any) =>{
            entry.file(file => {
              this.uploadAudioText = "Audio in caricamento..."
              this.changeRef.detectChanges();
              const reader = new FileReader();
              reader.onload = () => {
                this.audioBlob = new Blob([reader.result], {
                    type: file.type
                });
                this.uploadAudioText = file.name
                this.fileAudioToUpload = file.name
                this.changeRef.detectChanges();
            };
            reader.readAsArrayBuffer(file);
            })
          })
        }, (err) => {
        })
    }, (err) => {
    })
  }

  AbortUploadAudio() {
    this.fileTransferAudio.abort();
  }
  AbortUploadVideo() {
    this.fileTransferVideo.abort();
  }


  goBack() {
    if(this.global.modify)
      this.navCtrl.navigateRoot('tabs-dettagli-task/tabDettagli');
    else
      this.listOfTask();
    
  }

  deleteMedia(idMedia,video){
    if(this.global.modify){
      this.rubyService.delete_media_task(this.global.currentTask.id, idMedia).subscribe(
        data => {
          console.log(data);
          this.alertService.presentToast("Media eliminato con successo")
          if(video)
            this.fileVideoToMod = null
          else
            this.fileAudioToMod = null
        },
        error => {
          this.alertService.presentToast("Errore nell'eliminazione del media")
          console.log(error);
        },
        () => {
         
        }
      );
    } else {
      if(video)
        this.videoBlob = null
      else
        this.audioBlob = null
    }
  }

}
