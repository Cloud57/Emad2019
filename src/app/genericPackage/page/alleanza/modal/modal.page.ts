import { GlobalService } from 'src/app/service/global.service';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Alliance } from 'src/app/models/alliance';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-modal-alleanza',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalAlleanzaPage implements OnInit {
  isItemAvailable = false; 
  items : any = []
  originalItems : any =[]
  alliance: Alliance[] = []
  newAlliance: Alliance[] = []
  searchText = "";
  spinner: any;
  constructor(private modalController: ModalController, private ruby:RubyApiService, private global:GlobalService,private loading:LoadingController) { 
    ruby.get_users().subscribe(
      data => {
        this.originalItems = data;
        console.log(JSON.stringify(this.items))
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

  ngOnInit() {
    this.alliance= []
    this.newAlliance = []
    for(let user_alliance of this.global.currentPatient.users_in_alliance){
      this.alliance.push(new Alliance(user_alliance.id, user_alliance.user_type, user_alliance.email))
    }
  }
  async closeModal(src){
    await this.modalController.dismiss();
  }

  prepareSearchData(){
    this.items = []
    for(let item of this.originalItems){
      if(!this.alliance.some( ({email}) => email == item.email) && !this.newAlliance.some( ({email}) => email == item.email) && item.user_type < 2)
      this.items.push(item.email)
    }
  }

  addToAlliance(email){
    this.searchText = ""
    for(let item of this.originalItems){
      if(item.email == email){
        this.newAlliance.push(new Alliance(item.id, 0, item.email))
      }
    }
  }

  removeToAlliance(email){
    console.log(email)
    this.newAlliance = this.alliance.filter((item) => {
      return (item.email !== email);
      })
    }

    getItems(ev: any) {
      // Reset items back to all of the items
      this.prepareSearchData();
    
      // set val to the value of the searchbar
      const val = ev.target.value;
      if(val == ""){
        this.isItemAvailable=false;
        return
      }
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      }
    }

  save(){
    for(let item of this.newAlliance){
      this.alliance.push(item)
    }
    this.loading.create({
      message: "Attendi..."
    }).then((overlay) => {
      this.spinner = overlay
      this.spinner.present();
      this.ruby.mod_alliance(this.alliance,this.global.currentAlliance.id).subscribe(
        data => {
          this.spinner.dismiss()
          this.modalController.dismiss()
        },
        error => {
          this.spinner.dismiss()
          this.modalController.dismiss()
          console.log(error);

        },
        () => {
         
        }
      );
    });

  }

}
