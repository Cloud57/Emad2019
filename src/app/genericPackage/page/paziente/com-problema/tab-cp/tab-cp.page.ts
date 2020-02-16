import { RubyApiService } from 'src/app/service/ruby-api.service';
import { GlobalService } from './../../../../../service/global.service';
import { Component, OnInit } from '@angular/core';
import { NewProbBehSharedService } from '../new-prob-beh-shared.service';
import { Problem_behaviour } from 'src/app/models/Problem_behaviour';
import { FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { ChangeDetectorRef } from '@angular/core'
import {  LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-tab-cp',
  templateUrl: './tab-cp.page.html',
  styleUrls: ['./tab-cp.page.scss'],
})
export class TabCpPage implements OnInit {
  public type: string[]
  fileTransferVideo: FileTransferObject;
  fileTransferAudio: FileTransferObject;
  uploadVideoText: any;
  uploadAudioText: any;
  downloadText: any;
  spinner:any;
  public fileVideoToMod:number = null
  public fileAudioToMod:number = null
  
  constructor(public shared:NewProbBehSharedService, public global:GlobalService,private fileChooser: FileChooser,
    private filePath: FilePath,
    private file:File,
    private changeRef: ChangeDetectorRef,
    private loading: LoadingController,
    private rubyService:RubyApiService,
    public alertService:AlertService) { 
    if(this.global.modify){
      this.shared.problem.name = this.shared.problem.name+""
    }
  }


  ngOnInit() {
    this.type = Problem_behaviour.TYPE_BEHAVIOR
    if(this.global.modify){
      if(this.global.currentProblem.media_files.length > 0){
        for(let media of this.global.currentProblem.media_files)
          if(media.media.includes("mp4"))
            this.fileVideoToMod = media.media_id
          else if(media.media.includes("aac") || media.media.includes("mp3")|| media.media.includes("m4a"))
            this.fileAudioToMod = media.media_id
      }
    }
  }

  
  
  loadVideo(video: Blob, file: any){
    this.shared.videoBlob = video
    this.uploadVideoText = file.name
    this.shared.fileVideoToUpload = file.name
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
                this.shared.audioBlob = new Blob([reader.result], {
                    type: file.type
                });
                this.uploadAudioText = file.name
                this.shared.fileAudioToUpload = file.name
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
        this.rubyService.delete_media_problem(this.global.currentProblem.id, idMedia).subscribe(
          data => {
            console.log(data);
            this.alertService.presentToast("Media eliminato con successo")
            for(let media of this.global.currentProblem.media_files){
              if(media.media_id == idMedia){
                this.global.currentProblem.media_files = this.global.currentProblem.media_files.filter(obj => obj !== media);
              }
               
            }
            if(video){
              this.shared.videoBlob = null
              this.fileVideoToMod = null
            }
            else {
              this.fileAudioToMod = null
              this.shared.audioBlob = null
            }
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
      this.shared.videoBlob = null
      else
      this.shared.audioBlob = null
    }
    this.changeRef.detectChanges();
  }

}
