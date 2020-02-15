import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { GlobalService } from 'src/app/service/global.service';
import { EnvService } from 'src/app/service/env.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-tab-guida',
  templateUrl: './tab-guida.page.html',
  styleUrls: ['./tab-guida.page.scss'],
})
export class TabGuidaPage implements OnInit {
  videoUrl:string = null
  audioUrl:string = null
  constructor(private videoPlayer: VideoPlayer, public global: GlobalService, public env: EnvService, public ruby:RubyApiService) { }

  ngOnInit() {
    if(this.global.modify){
      this.global.modify=false
      this.ruby.get_task(this.global.currentTask.id).subscribe(
        data => {
          this.global.currentTask = data as Task
          console.log(this.global.currentTask);
          
          this.setUrl()
        },
        error => {
          console.log(error);
        },
        () => {
         
        }
      );
    } else {
      this.setUrl()
    }
      console.log("video "+ this.videoUrl);
      console.log("audio "+ this.audioUrl);
      
  }

  setUrl(){
    if(this.global.currentTask.media_files.length > 0){
      for(let media of this.global.currentTask.media_files)
        if(media.media.includes("mp4"))
          this.videoUrl = EnvService.API_URL+  media.media
        else if(media.media.includes("aac") || media.media.includes("mp3") || media.media.includes("m4a"))
          this.audioUrl = EnvService.API_URL+  media.media
    }
  }
  

}
