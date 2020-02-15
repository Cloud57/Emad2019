import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { AlertService } from 'src/app/service/alert.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { ChangeDetectorRef } from '@angular/core'
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-esecuzione-task',
  templateUrl: './esecuzione-task.page.html',
  styleUrls: ['./esecuzione-task.page.scss'],
})
export class EsecuzioneTaskPage implements OnInit {
  title=""
  is_executed;
  reportForm: FormGroup;
  uploadVideoText: any;
  uploadAudioText: any;
  downloadText: any;
  fileTransferVideo: FileTransferObject;
  fileTransferAudio: FileTransferObject;
  public fileVideoToUpload: any
  public fileAudioToUpload: any
  public videoBlob: Blob = null;
  public audioBlob: Blob = null;
  spinner:any;
  public fileVideoToMod:number = null
  public fileAudioToMod:number = null
  constructor(public global:GlobalService, private navCtrl:NavController,private rubyService:RubyApiService,
              public alertService:AlertService,
              private fb:FormBuilder,
              private fileChooser: FileChooser,
              private filePath: FilePath,
              private file:File,
              private changeRef: ChangeDetectorRef,
              private loading: LoadingController) { 
              this.reportForm = fb.group({
                is_executed: ['', Validators.required],
                date_execution: ['', Validators.required],
                duration: ['', Validators.required],
                description: ['', Validators.required]
                });

                if(this.global.modify){
                  console.log(this.global.currentReport);
                  
                  this.title="Modifica Report"
                  this.reportForm.setValue({
                    is_executed: this.global.currentReport.is_executed+"",
                    date_execution: this.global.currentReport.date_execution,
                    duration: this.global.currentReport.duration,
                    description: this.global.currentReport.description
                  })
                this.is_executed = this.global.currentReport.is_executed;
                  if(this.global.currentReport.media_files.length > 0){
                    for(let media of this.global.currentReport.media_files)
                      if(media.media.includes("mp4"))
                        this.fileVideoToMod = media.media_id
                      else if(media.media.includes("aac") || media.media.includes("mp3")|| media.media.includes("m4a"))
                        this.fileAudioToMod = media.media_id
                  }
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
      this.loading.create({
        message: "Attendi..."
      }).then((overlay) => {     
      this.spinner = overlay
      this.spinner.present();
      if(!this.global.modify){
        this.rubyService.new_Report(form.value, this.global.currentUser.id,this.global.currentTask.id,this.videoBlob, this.fileVideoToUpload, this.audioBlob, this.fileAudioToUpload).subscribe(
          data => {
            this.alertService.presentToast("Report creato");
            this.global.currentTask.last_exec_time= form.value.duration
            this.goBack()
          },
          error => {
            console.log(error);
            this.alertService.presentToast("Errore nell'inserimento del report");
            this.spinner.dismiss();
          },
          () => {
            this.spinner.dismiss();
          }
        );
      } else {
        this.rubyService.mod_Report(form.value, this.global.currentReport.id,this.videoBlob, this.fileVideoToUpload, this.audioBlob, this.fileAudioToUpload).subscribe(
          data => {
            let response:any = data
            this.alertService.presentToast("Report modificato");
            this.global.currentReport.is_executed = Boolean(JSON.parse(this.reportForm.value.is_executed)); 
            this.global.currentReport.duration = this.reportForm.value.duration
            this.global.currentReport.description = this.reportForm.value.description
            this.global.currentReport.date_execution = this.reportForm.value.date_execution
            this.global.currentTask.last_exec_time= form.value.duration
            this.global.currentReport.media_files = response.media_files
            this.goBack()
          },
          error => {
            console.log(error);
            this.alertService.presentToast("Errore nella modifica del report");
            this.spinner.dismiss();
          },
          () => {
            this.spinner.dismiss();
          }
        );
      }
    });
    } else {
      this.alertService.presentToast("Campi obbligatori non compilati");
    }

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

  deleteMedia(idMedia,video){
    if(this.global.modify){
      this.loading.create({
        message: "Attendi..."
      }).then((overlay) => {
        this.spinner = overlay
        this.spinner.present();
        this.rubyService.delete_media_report(this.global.currentReport.id, idMedia).subscribe(
          data => {
            console.log(data);
            this.alertService.presentToast("Media eliminato con successo")
            for(let media of this.global.currentReport.media_files){
              if(media.media_id == idMedia){
                this.global.currentReport.media_files = this.global.currentReport.media_files.filter(obj => obj !== media);
              }
               
            }
            if(video)
              this.fileVideoToMod = null
            else
              this.fileAudioToMod = null

              this.changeRef.detectChanges();
          },
          error => {
            this.alertService.presentToast("Errore nell'eliminazione del media")
            this.spinner.dismiss();
            console.log(error);
          },
          () => {
           this.spinner.dismiss()
          }
        );

      });     

    } else {
      if(video)
        this.videoBlob = null
      else
        this.audioBlob = null
    }
    this.changeRef.detectChanges();
  }
}
