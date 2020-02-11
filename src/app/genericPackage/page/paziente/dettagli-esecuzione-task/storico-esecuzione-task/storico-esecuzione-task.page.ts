import { GlobalService } from 'src/app/service/global.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-storico-esecuzione-task',
  templateUrl: './storico-esecuzione-task.page.html',
  styleUrls: ['./storico-esecuzione-task.page.scss'],
})
export class StoricoEsecuzioneTaskPage implements OnInit {
  @ViewChild('barChart',{static:false}) barChart;
  bars: any;
  colorArray: any;
  constructor(public global:GlobalService) { }
  ionViewDidEnter() {
    this.createBarChart();
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [this.global.currentTask.duration, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
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
