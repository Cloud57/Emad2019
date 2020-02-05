import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { GlobalService } from '../service/global.service';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';



@Component({
  selector: 'app-speech',
  templateUrl: './speech.page.html',
  styleUrls: ['./speech.page.scss'],
})
export class SpeechPage implements OnInit {
  matches: String[];
  isRecording = false;

  constructor( 
    private navCtrl: NavController,
    private global: GlobalService,
    private speechRecognition: SpeechRecognition,
    private plt: Platform,
    private cd: ChangeDetectorRef
  ){
    if (!this.checkPermission){
      this.getPermission();
    }
  }

  getPermission(){
    // Request permissions
    this.speechRecognition.requestPermission()
    .then(
      () => console.log('Granted'),
      () => console.log('Denied')
    )
  }

  checkPermission(){
    // Check permission
    this.speechRecognition.hasPermission()
    .then((hasPermission: boolean) => console.log(hasPermission))
  }

  startListening(){
    let options={
      language: 'it-IT'
    }
    this.isRecording=true;
    // Start the recognition process
    this.speechRecognition.startListening(options)
    .subscribe(matches =>{
      this.matches=matches;
      this.isRecording=false;
      this.cd.detectChanges();
    });
  }

  stopListening(){
    // Stop the recognition process (iOS only)
    this.speechRecognition.stopListening().then(()=>{
      this.isRecording=false;
    })
  }

  

  speechPage() {
    this.navCtrl.navigateRoot('/speech');
  }

  ngOnInit() {
  }

  isIos(){
    return this.plt.is('ios');
  }

    

}
