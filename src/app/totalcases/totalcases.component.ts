import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CoronaAPIServiceService } from './../services/CoronaAPI/corona-apiservice.service';

@Component({
  selector: 'app-totalcases',
  templateUrl: './totalcases.component.html',
  styleUrls: ['./totalcases.component.sass']
})
export class TotalcasesComponent implements OnInit {

  constructor(private _coronaService: CoronaAPIServiceService) { }

  public latest = [];
  public dataset1 = [];
  public dataset2 = [];

  public lineChartData: ChartDataSets[] = [
    { data: this.dataset1, label: 'Confirmed Cases' },
    { data: this.dataset2, label: 'Deaths' },
  ];
  public lineChartLabels: Label[] = ['Cases'];
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'bar';
  public lineChartPlugins = [];

  getDataSets() {
    this._coronaService.getLatestFigures().subscribe((data) => {
      this.latest = data;
      this.dataset1.push(this.latest.latest.confirmed);
      this.dataset2.push(this.latest.latest.deaths);
      console.log(this.dataset1);
      console.log(this.dataset2);
    });
  }

  ngOnInit() {
    this.getDataSets();
  }




}
