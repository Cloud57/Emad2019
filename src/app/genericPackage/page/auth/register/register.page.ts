import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/service/alert.service';
import { NgForm } from '@angular/forms';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { Location } from '@angular/common';
import { LoadingController } from '@ionic/angular';
import {Chooser, ChooserResult} from '@ionic-native/chooser/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  images: any[];
  imageResponse: any;
  options: any;
  spinner: any;
  public imageBlob: Blob = null;
  public fileObj:ChooserResult
  private imageName:any
  constructor(public imagePicker: ImagePicker, private chooser:Chooser,public file: File,private navCtrl: NavController,private alertService: AlertService,
    public rubyService: RubyApiService, public location:Location, private loading:LoadingController,
    private filePath: FilePath) {}

     PickFile(){
      this.chooser.getFile("image/jpeg").then((value:ChooserResult)=>{
        this.fileObj = value;
        this.getImages(this.fileObj)
      },(err)=>{
        alert(JSON.stringify(err));
      })
    }
	
    getImages(fileObj:ChooserResult) {
      console.log(fileObj);
      console.log(fileObj.uri);
      
        this.filePath.resolveNativePath(fileObj.uri).then(
          (nativepath) => {
            console.log(nativepath);
            
            this.file.resolveLocalFilesystemUrl(nativepath).then((entry:any) =>{
              entry.file(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                this.imageBlob =new Blob([reader.result], {
                  type: file.type
              });
                this.imageName = file.name 
              };
              reader.readAsArrayBuffer(file);
              })
            })

          }, (err) => {
            alert(JSON.stringify(err));
          })
      }
    

  ngOnInit() {
  }
  loginPage(){
    this.navCtrl.back();
  }

  register(form: NgForm) {
    if(!form.valid){
      this.alertService.presentToast("I campi obbligatori non sono compilati");
      return
    }
    this.loading.create({
      message: "Attendi..."
    }).then((overlay) => {
      this.spinner = overlay
      this.spinner.present();
      console.log(form.value)
      this.rubyService.register(form.value,this.imageName, this.imageBlob).subscribe(
        data => {
          this.alertService.presentToast("Registrazione completata");
          this.loginPage();
        },
        error => {
          this.spinner.dismiss();
          console.log(error);
          if(error.status)
          this.alertService.presentToast("Errore nella registrazione");
        },
        () => {
         this.spinner.dismiss();
        }
      );
    });
   
  }

  

}
