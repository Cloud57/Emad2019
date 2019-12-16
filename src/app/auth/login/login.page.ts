import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { AlertService } from 'src/app/service/alert.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public users:Observable<any>
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    public rubyService: RubyApiService
  ) {
    
    this.users = rubyService.getUsers()
    this.users.subscribe(data => {
      console.log('my data: ', data);
    })
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
  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        this.alertService.presentToast("Logged In");
      },
      error => {
        console.log(error);
      },
      () => {
        this.registerPage();
      }
    );
  }
}