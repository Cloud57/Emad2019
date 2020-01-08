import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-tab-guida',
  templateUrl: './tab-guida.page.html',
  styleUrls: ['./tab-guida.page.scss'],
})
export class TabGuidaPage implements OnInit {

  constructor(private videoPlayer: VideoPlayer) { }

  ngOnInit() {
  }

  

}
