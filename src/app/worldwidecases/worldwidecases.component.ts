import { Component, OnInit } from '@angular/core';
import { CoronaAPIServiceService } from './../services/CoronaAPI/corona-apiservice.service';
import { APICountries } from 'src/app/interfaces/apicountries';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-worldwidecases',
  templateUrl: './worldwidecases.component.html',
  styleUrls: ['./worldwidecases.component.sass']
})
export class WorldwidecasesComponent implements OnInit {

  public figures = [];
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
  public lineChartType = 'doughnut';
  public lineChartPlugins = [];

  constructor(private coronaService: CoronaAPIServiceService) { }

  ngOnInit(): void {
  }

  getCountryDetails(countryId: string){
    this.coronaService.getCountryFigures(countryId).subscribe(
      (data) => {
        this.figures = data;
        this.dataset1.push(this.figures.location.latest.confirmed);
        this.dataset2.push(this.figures.location.latest.deaths);
      });
      return false;
  }

}
