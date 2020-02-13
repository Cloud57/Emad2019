import { GlobalService } from 'src/app/service/global.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-storico-esecuzione-task',
  templateUrl: './storico-esecuzione-task.page.html',
  styleUrls: ['./storico-esecuzione-task.page.scss'],
})
export class StoricoEsecuzioneTaskPage implements OnInit {
  @ViewChild('barChart',{static:false}) barChart;
  bars: any;
  colorArray: any;
  title:string="Storico esecuzione task";
  constructor(public global:GlobalService,public navCtrl:NavController) { }
  ionViewDidEnter() {
    this.createBarChart();
  }
  goBack(){
    this.navCtrl.navigateRoot('lista-task');
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['10/01/20', '13/01/20', '15/01/20', '17/01/20', '20/01/20', '22/01/20', '25/01/20', '30/01/20'],
        datasets: [{
          label: '',
          data: [2, 4, 6, 8, 10, 12, 15, 20],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  ngOnInit() {
  }

}
