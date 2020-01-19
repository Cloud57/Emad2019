import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { Problem_behaviour } from 'src/app/models/Problem_behaviour';

@Component({
  selector: 'app-dettagli-comportamento-problema',
  templateUrl: './dettagli-comportamento-problema.page.html',
  styleUrls: ['./dettagli-comportamento-problema.page.scss'],
})
export class DettagliComportamentoProblemaPage implements OnInit {
  public show:boolean = false;
  public show1:boolean = false;
  public show2:boolean = false;
  public show3:boolean = false;
  public buttonName:any = 'Mostra';
  public buttonName1:any = 'Mostra';
  public buttonName2:any = 'Mostra';
  public buttonName3:any = 'Mostra';
  public problem:Problem_behaviour = new Problem_behaviour();
  
  public title:string = "Dettagli Comportamento Problema"
  constructor(private navCtrl: NavController, public global : GlobalService) { 
    this.problem = global.currentProblem;

  }

  ngOnInit() {
  }

  toggleDescrizione(){
    this.show = !this.show;

   
    if(this.show)  
      this.buttonName = "Nascondi";
    else
      this.buttonName = "Mostra";
  }

  toggleAntecedente(){
    this.show1 = !this.show1;

   
    if(this.show1)  
      this.buttonName1 = "Nascondi";
    else
      this.buttonName1 = "Mostra";
  }
  toggleSituzione(){
    this.show2 = !this.show2;

   
    if(this.show2)  
      this.buttonName2 = "Nascondi";
    else
      this.buttonName2 = "Mostra";
  }
  toggleConseguente(){
    this.show3 = !this.show3;

   
    if(this.show3)  
      this.buttonName3 = "Nascondi";
    else
      this.buttonName3 = "Mostra";
  }


}
