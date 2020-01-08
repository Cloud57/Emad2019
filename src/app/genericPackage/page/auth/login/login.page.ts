import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/service/alert.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/service/global.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public users:Observable<any>
  constructor(
    private navCtrl: NavController,
    private alertService: AlertService,
    public rubyService: RubyApiService,
    private storage: Storage,
    private global: GlobalService
  ) {
  }
  ngOnInit() {
  }

  // On Register button tap, dismiss login modal and open register modal
 registerPage() {
    this.navCtrl.navigateRoot('/register');
  }
  loginPage(){
    this.navCtrl.navigateRoot('/');
  }
  Page(){
    this.navCtrl.navigateRoot('/tabs-dettagli-task/tabGuida');

  }


  login(form: NgForm) {
    var response : any = {response : { user_type :"", auth_token : "", name: "", surname: "", email: "", telephone: ""} };
    this.rubyService.login(form.value.email, form.value.password).subscribe(
      data => {
        response = data
        this.global.setCurrentUser(response)
        this.storage.set("user", JSON.stringify(response.response));
        this.alertService.presentToast("Logged In");
        if(response.response.user_type == 2 || response.response.user_type == 1)
          this.navCtrl.navigateRoot('doctor-home');
        else
          this.navCtrl.navigateRoot('paziente-home');        
      },
      error => {
        this.alertService.presentToast("Errore nel login");
        console.log(error);
      },
      () => {
       
      }
    );
  }
}