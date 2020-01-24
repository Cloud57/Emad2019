import { Component, OnInit } from '@angular/core';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { SharedNewPazienteService } from '../shared-new-paziente.service';
import { GlobalService } from 'src/app/service/global.service';
import { Alliance } from 'src/app/models/alliance';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  isItemAvailable = false; 
  items : any = []
  originalItems : any =[]
  searchText = "";
  constructor(private ruby:RubyApiService,public sharedService: SharedNewPazienteService, public global: GlobalService) { 
    this.sharedService.alliance.push(new Alliance(this.global.currentUser.id, 1, this.global.currentUser.email))
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

  prepareSearchData(){
    this.items = []
    for(let item of this.originalItems){
      if(!this.sharedService.alliance.some( ({email}) => email == item.email))
      this.items.push(item.email)
    }
  }

  addToAlliance(email){
    this.searchText = ""
    for(let item of this.originalItems){
      if(item.email == email){
        this.sharedService.alliance.push(new Alliance(item.id, 0, item.email))
      }
    }
  }

  removeToAlliance(email){
    console.log(email)
    this.sharedService.alliance = this.sharedService.alliance.filter((item) => {
      return (item.email !== email);
      })
    }


  ngOnInit() {
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

}
