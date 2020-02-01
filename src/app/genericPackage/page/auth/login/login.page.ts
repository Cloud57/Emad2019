import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public users:Observable<any>
  spinner:any;
  constructor(
    private navCtrl: NavController,
    private alertService: AlertService,
    public rubyService: RubyApiService,
    private storage: Storage,
    private global: GlobalService,
    private loading:LoadingController
  ) {
  }
  ngOnInit() {
  }

  // On Register button tap, dismiss login modal and open register modal
 registerPage() {
    this.navCtrl.navigateRoot('/register');
  }
  recoveryPassword(){
    this.navCtrl.navigateRoot('/password-recovery');
  }
  loginPage(){
    this.navCtrl.navigateRoot('/');
  }
  Page(){
    this.navCtrl.navigateRoot('/new-task');

  }


  login(form: NgForm) {
    this.loading.create({
      message: "Attendi..."
    }).then((overlay) => {
      this.spinner = overlay
      this.spinner.present();
      var response : any = {response : { user_type :"", auth_token : "", name: "", surname: "", email: "", telephone: ""} };
      this.rubyService.login(form.value.email, form.value.password).subscribe(
        data => {
          response = data
          this.global.setCurrentUser(response)
          this.storage.set("user", JSON.stringify(response.response));
            setTimeout(() =>{
             this.alertService.presentToast("Logged In");
            this.navCtrl.navigateRoot('doctor-home');
          }, 500);
        
            
        },
        error => {
          this.alertService.presentToast("Errore nel login");
          console.log(error);
          this.spinner.dismiss();
        },
        () => {
          this.spinner.dismiss();
        }
      );
    });
  
  }
}