import { CoronaAPIServiceService } from './../services/CoronaAPI/corona-apiservice.service';
import { Color, Label, ChartsModule } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-totalcases',
  templateUrl: './totalcases.component.html',
  styleUrls: ['./totalcases.component.sass']
})
export class TotalcasesComponent implements OnInit {

  
  
  constructor(private _coronaService: CoronaAPIServiceService) { }


  public lineChartData: ChartDataSets[] = [
    { data: [0, 65], label: 'Confirmed Cases' },
    { data: [0, 50], label: 'Deaths' },
  ];
  public lineChartLabels: Label[] = ['Start', 'Now'];
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  getLatestFigures(){
    this._coronaService.getLatest()
  }

  ngOnInit(){
    console.log(this.getLatestFigures())
  }

}
