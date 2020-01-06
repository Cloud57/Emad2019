import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/service/alert.service';
import { NgForm } from '@angular/forms';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  images: any[];
  imageResponse: any;
  options: any;
  constructor(public imagePicker: ImagePicker, public file: File,private navCtrl: NavController,private alertService: AlertService,
    public rubyService: RubyApiService) {}
    getImages() {
      this.options = {
        // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
        // selection of a single image, the plugin will return it.
        maximumImagesCount: 1,
    
        // max width and height to allow the images to be.  Will keep aspect
        // ratio no matter what.  So if both are 800, the returned image
        // will be at most 800 pixels wide and 800 pixels tall.  If the width is
        // 800 and height 0 the image will be 800 pixels wide if the source
        // is at least that wide.
        //width: 800,
       // height: 800,
    
        // quality of resized image, defaults to 100
        //quality: 70,
    
        // output type, defaults to FILE_URIs.
        // available options are
        // window.imagePicker.OutputType.FILE_URI (0) or
        // window.imagePicker.OutputType.BASE64_STRING (1)
        outputType: 1
      };
      this.imageResponse = [];
      this.imagePicker.getPictures(this.options).then((results) => {
        for (var i = 0; i < results.length; i++) {
          this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
        }
      }, (err) => {
        alert(err);
      });
    }
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
