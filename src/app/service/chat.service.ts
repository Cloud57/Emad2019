
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject, Observable} from 'rxjs';

// Message class for displaying messages in the component
export class Message {
  profile_pic: string
  constructor(
    public content: string,
    public sentBy: string,
    ) {
      this.profile_pic = (sentBy=='user') ? "../../assets/img/bot/user.png": "../../assets/img/bot/bot.png"
    }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {}

  setResponseHandler(responseHandler){
    this.responseHandler=responseHandler;
  }

  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    return this.client.textRequest(msg)
               .then(res => {
                  const speech = res.result.fulfillment.speech;
                  const botMessage = new Message(speech, 'bot');
                  this.update(botMessage);
               });
  }



  // Adds message to source
  update(msg: Message) {
    console.log(Message);
    this.conversation.next([msg]);
  }

  

  responseHandler;

}
