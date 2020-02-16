import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/models/user';
import { GlobalService } from 'src/app/service/global.service';
import { NavController } from '@ionic/angular';
import { FilePath } from '@ionic-native/file-path/ngx';
import {Chooser, ChooserResult} from '@ionic-native/chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { LoadingController } from '@ionic/angular';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { AlertService } from 'src/app/service/alert.service';
import { EnvService } from 'src/app/service/env.service';
@Component({
  selector: 'app-profilo-caregiver',
  templateUrl: './profilo-caregiver.page.html',
  styleUrls: ['./profilo-caregiver.page.scss'],
})
export class ProfiloCaregiverPage implements OnInit {
  public title:string = "Profilo Utente"
  public age:number;
  public role:string[] = ["Caregiver", "Terapista", "Medico"]
  public caregiver:User = new User();
  public imageBlob: Blob = null;
  public fileObj:ChooserResult
  private imageName:any
  spinner: any;

  constructor(private navCtrl: NavController, public global : GlobalService, private chooser:Chooser,public file: File,private filePath: FilePath,
    private loading:LoadingController, private rubyService:RubyApiService,private alertService: AlertService, private EnvService:EnvService)
 { 
    this.caregiver = global.currentUser
  }

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
              this.uploadImage()
            };
            reader.readAsArrayBuffer(file);
            })
          })

        }, (err) => {
          alert(JSON.stringify(err));
        })
    }
  
    uploadImage(){
      this.loading.create({
        message: "Attendi..."
      }).then((overlay) => {
        this.spinner = overlay
        this.spinner.present();
        this.rubyService.mod_utente(this.imageName, this.imageBlob, this.global.currentUser.id).subscribe(
          data => {
            let response:any = data
            if(response.profile_pic != undefined){
              this.global.currentUser.profile_pic = EnvService.API_URL + response.profile_pic
            } else {
              this.global.currentUser.profile_pic = "../../assets/img/profilo.png"
            }
            this.alertService.presentToast("Immagine aggiornata");
          },
          error => {
            this.spinner.dismiss();
            console.log(error);
            if(error.status)
            this.alertService.presentToast("Errore");
          },
          () => {
           this.spinner.dismiss();
          }
        );
      });
    }

  ngOnInit() {
  }

  logout(){
    this.global.currentUser = new User()
    this.navCtrl.navigateRoot('/');
  }
  home(){
    this.global.currentUser = new User()
    this.navCtrl.navigateRoot('/doctor-home');
  }

}
