import { IonicGestureConfig } from './IonicGestureConfig';
import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {File} from '@ionic-native/file/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { RubyApiService } from './service/ruby-api.service';
import { EnvService } from './service/env.service';
import { AuthInterceptor} from './service/auth.interceptor'
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import {Chooser} from '@ionic-native/chooser/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage,
    RubyApiService,
    EnvService,
    ImagePicker,
    VideoPlayer,
    File,
    FileTransfer,
    Chooser,
    FilePath,
    FileChooser,
    {provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    SpeechRecognition,
    TextToSpeech
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
