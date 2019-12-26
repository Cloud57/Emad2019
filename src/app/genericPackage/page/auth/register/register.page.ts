import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/service/alert.service';
import { NgForm } from '@angular/forms';
import { RubyApiService } from 'src/app/service/ruby-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private navCtrl: NavController,private alertService: AlertService,
    public rubyService: RubyApiService) {}

  ngOnInit() {
  }
  loginPage(){
    this.navCtrl.navigateRoot('/');
  }

  register(form: NgForm) {
    console.log(form.value)
    this.rubyService.register(form.value).subscribe(
      data => {
        this.alertService.presentToast("Registrazione completata");
        this.loginPage();
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

}
