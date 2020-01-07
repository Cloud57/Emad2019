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

  playVideoLocal() {
    this.videoPlayer.play('file:///android_asset/www/assets/SampleVideo.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

  playVideoHosted() {
    this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

}
