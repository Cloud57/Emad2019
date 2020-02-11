import { Component, OnInit, ChangeDetectorRef, ViewChild  } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { GlobalService } from '../service/global.service';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { ChatService, Message } from '../service/chat.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators'
import { Router } from '@angular/router';




@Component({
  selector: 'app-speech',
  templateUrl: './speech.page.html',
  styleUrls: ['./speech.page.scss'],
})
export class SpeechPage implements OnInit {
  @ViewChild('chatBody', {static: false}) content
  //Speech recognition
  matches: String[];
  isRecording = false;
  permissionGranted =false;
  //DialogFlow
  messages: Array<Message>=[];
  

  constructor( 
    private navCtrl: NavController,
    private global: GlobalService,
    private speechRecognition: SpeechRecognition,
    private plt: Platform,
    private cd: ChangeDetectorRef,
    public chat: ChatService,
    private tts: TextToSpeech,
    private router: Router
  ){  }

  getPermission(){
    // Request permissions
    this.speechRecognition.requestPermission()
    .then(
      () => this.permissionGrantedNorify(),
      () => this.permissionDeniedNorify()
    )
  }

  checkPermission(){
    // Check permission
    this.speechRecognition.hasPermission()
    .then((hasPermission: boolean) => 
      this.permissionGranted = hasPermission
    )
  }

  permissionGrantedNorify(){
    this.permissionGranted=true;
    this.startListening();
  }

  permissionDeniedNorify(){
    this.permissionGranted=false;
    alert("La'aplicazione ha bisogno di utilizzare il microfono per funzionare!");
  }

  startListening(){
    if (!this.permissionGranted){
      this.getPermission();
      return;
    }
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

  back(){
    this.navCtrl.back();
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
      this.scrollToBottom();
      if (data[0].sentBy=='user'){
        //Add user question to messages list
        this.messages.push(data[0]);
        //Add fake messages with gif typing...
        this.messages.push(new Message(
          "",
          "bot",
          true
        ));
      }
      
      
      if(data[0].sentBy=='bot'){
        //Replace placeholder (gif) with bot response
        this.messages[this.messages.length-1]=data[0];
        //And now TTS
        this.tts.speak({
          text: data[0].content,
          locale: 'it-IT'
        })
        .then(() => console.log('Success') )
        .catch((reason: any) => console.log(reason));
        //execute action
        this.doAction(data[0]);
        }
      }
      
      this.cd.detectChanges();
      
  }

  
  scrollToBottom(){
    
    this.content.scrollToBottom(300);  //300 for animate the scroll effect.
}

  addMock(){
    this.messages.push(new Message("prova1","user"));
    this.messages.push(new Message("prova1Resp","bot"));
    this.messages.push(new Message("prova2","user"));
    this.messages.push(new Message("prova2Resp","bot"));
    this.messages.push(new Message("prova3","user"));
    this.messages.push(new Message("prova3Resp","bot"));
    this.messages.push(new Message("prova4","user"));
    this.messages.push(new Message("prova4Resp","bot"));
    this.messages.push(new Message("prova5","user"));
    this.messages.push(new Message("prova5Resp","bot"));
    this.messages.push(new Message("","bot",true));
    this.scrollToBottom(); 
  }


  doAction(message){
    setTimeout(()=>{
      this.router.navigate([message.action])
    },3000)
  }

    

}
