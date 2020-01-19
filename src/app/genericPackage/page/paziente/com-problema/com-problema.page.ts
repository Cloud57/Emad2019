import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RubyApiService } from 'src/app/service/ruby-api.service';
import { GlobalService } from 'src/app/service/global.service';


@Component({
  selector: 'app-com-problema',
  templateUrl: './com-problema.page.html',
  styleUrls: ['./com-problema.page.scss'],
})
export class ComProblemaPage implements OnInit {
  response:any;
  title="Comportamento problema"
  constructor(private navCtrl: NavController, private rubyService:RubyApiService,
              private globalService: GlobalService) { }


  ngOnInit() {
    this.getListaProblem()
  }

  newCompProblema() {
    this.navCtrl.navigateRoot('/new-com-problema');
  }

  getListaProblem() {
    
    this.rubyService.get_problem(this.globalService.currentPatient.id).subscribe(
      data => {
        this.response = data   
        console.log(this.response)
      },
      error => {
        console.log(error);
      },
      () => {
       
      }
    );
  }

}
