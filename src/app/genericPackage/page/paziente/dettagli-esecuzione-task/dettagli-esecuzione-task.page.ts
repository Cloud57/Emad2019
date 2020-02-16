import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
import { EnvService } from 'src/app/service/env.service';

@Component({
  selector: 'app-dettagli-esecuzione-task',
  templateUrl: './dettagli-esecuzione-task.page.html',
  styleUrls: ['./dettagli-esecuzione-task.page.scss'],
})
export class DettagliEsecuzioneTaskPage implements OnInit {
  title = "Report del task"
  videoUrl:string = null
  audioUrl:string = null
  constructor(public global:GlobalService, public navCtrl: NavController, private EnvService:EnvService) { 
    this.setUrl()
  }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.back()
  }

  modify(){
    this.global.modify=true
    this.navCtrl.navigateRoot('/esecuzione-task');
  }

  setUrl(){
    if(this.global.currentReport.media_files.length > 0){
      for(let media of this.global.currentReport.media_files)
        if(media.media.includes("mp4"))
          this.videoUrl = EnvService.API_URL+  media.media
        else if(media.media.includes("aac") || media.media.includes("mp3") || media.media.includes("m4a"))
          this.audioUrl = EnvService.API_URL+  media.media
    }
  }
}
