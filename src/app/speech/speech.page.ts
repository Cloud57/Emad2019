import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { GlobalService } from '../service/global.service';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { ChatService, Message } from '../service/chat.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators'



@Component({
  selector: 'app-speech',
  templateUrl: './speech.page.html',
  styleUrls: ['./speech.page.scss'],
})
export class SpeechPage implements OnInit {
  //Speech recognition
  matches: String[];
  isRecording = false;

  //DialogFlow
  //messages: Observable<Message[]>;
  messages: Array<Message>=[];
    /*new Message("prova1","user"),
    new Message("prova1Resp","bot"),
    new Message("prova2","user"),
    new Message("prova2Resp","bot"),
    new Message("prova3","user"),
    new Message("prova3Resp","bot"),
    new Message("prova4","user"),
    new Message("prova4Resp","bot"),
    new Message("prova5","user"),
    new Message("prova5Resp","bot")
  ];*/
  

  constructor( 
    private navCtrl: NavController,
    private global: GlobalService,
    private speechRecognition: SpeechRecognition,
    private plt: Platform,
    private cd: ChangeDetectorRef,
    public chat: ChatService,
    private tts: TextToSpeech
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
      this.sendMessage(this.matches[0]);
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

  isIos(){
    return this.plt.is('ios');
  }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    /*this.messages = this.chat.conversation.asObservable()
    .pipe(
      scan((acc, val) => acc.concat(val) )
    )*/
    this.chat.conversation.subscribe((data)=>this.responseHanlder(data));
    
    
    
  }

  sendMessage(message) {
    this.chat.converse(message);
    this.cd.detectChanges();
  }

  responseHanlder(data){
    console.log(data);
    if(data.length>0){
      this.messages.push(data[0]);
      this.cd.detectChanges();
      if(data[0].sentBy=='bot')
        this.tts.speak({
          text: data[0].content,
          locale: 'it-IT'
        })
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
    }
  }

  



  

    

}
