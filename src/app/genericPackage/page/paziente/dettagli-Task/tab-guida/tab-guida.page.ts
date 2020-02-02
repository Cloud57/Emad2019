import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { GlobalService } from 'src/app/service/global.service';
import { EnvService } from 'src/app/service/env.service';

@Component({
  selector: 'app-tab-guida',
  templateUrl: './tab-guida.page.html',
  styleUrls: ['./tab-guida.page.scss'],
})
export class TabGuidaPage implements OnInit {
  videoUrl:string
  constructor(private videoPlayer: VideoPlayer, public global: GlobalService, public env: EnvService) { }

  ngOnInit() {
    if(this.global.currentTask.media_files.length > 0)
      this.videoUrl = this.env.API_URL+  this.global.currentTask.media_files[0].media
  }

  

}
