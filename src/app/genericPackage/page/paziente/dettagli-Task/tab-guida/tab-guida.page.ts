import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-tab-guida',
  templateUrl: './tab-guida.page.html',
  styleUrls: ['./tab-guida.page.scss'],
})
export class TabGuidaPage implements OnInit {

  constructor(private videoPlayer: VideoPlayer, public global: GlobalService) { }

  ngOnInit() {
  }

  

}
