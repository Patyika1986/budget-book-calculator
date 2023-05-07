import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { Subject, takeUntil } from 'rxjs';
import { DataListFacadeService } from '../../../facade/data-list-facade.service';
import { DataListModel } from 'src/app/interface/dataListModel';
@Component({
  selector: 'app-balance-overview',
  templateUrl: './balance-overview.component.html',
  styleUrls: ['./balance-overview.component.scss']
})
export class BalanceOverviewComponent implements OnInit {

  constructor(private router: Router, private dataListFacadeService: DataListFacadeService) { }

  subscribtion$ = new Subject();

  allTakings:DataListModel[] = [];

  allOutputs:number[] = [];

  takings: number = 0;

  dataList: DataListModel[] = [];


   ngOnInit(): void {
    this.getDatas();
    this.createCokieDiagram();
    const takings = this.getTaking();
    const outputs = this.getOutput();
  }

  backToMain(){
    this.router.navigate(['overview']);
  }

  getDatas(){
    this.dataListFacadeService.loadAllDataList();
    this.dataListFacadeService.datas$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {
          this.dataList = list;
      });
  }

   getTaking(){
    this.dataListFacadeService.loadAllDataList();
    this.dataList = [];
    this.dataListFacadeService.datas$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {
        this.dataList = list;
        const data = this.dataList.find(x => x.taking === true);
        console.log(data);
      });

      
      
        
        
      
  }

  getOutput(){
    this.dataListFacadeService.loadAllDataList();
    this.dataListFacadeService.datas$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {
          const output = list.find(x => x.output === true);         
      });
  }

  createCokieDiagram(){
    Chart.register(...registerables);
  let myChart = new Chart("pieDiagram", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  ngOnDestroy(): void {
    this.subscribtion$.next(false);
    this.subscribtion$.complete();
  }

}
