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

  /**
   * 
   */
  allTakings:number[] = [];
  takings = 0;

  allOutputs:number[] = [];
  outputs = 0;

  allTotal:number[] = [];
  total = 0;


  dataList: DataListModel[] = [];


   ngOnInit(): void {
    this.getDatas();
    this.createCokieDiagram();
    this.getTaking();
    this.getOutput();
    this.getTotal();
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
    });
    const taking = this.dataList.filter(y => y.taking === true);
    for(const amount of taking){
      this.allTakings.push(Number(amount.amount))
    }    
    this.allTakings.map((list) => this.takings += list)
  }

  getOutput(){
    this.dataListFacadeService.loadAllDataList();
    this.dataListFacadeService.datas$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {
          this.dataList = list;      
      });
      const output = this.dataList.filter(y => y.output === true);
      for(const amount of output){
        this.allOutputs.push(Number(amount.amount));
      } 
      this.allOutputs.map((list) => this.outputs += list)      
  }

  getTotal(){
    this.dataListFacadeService.loadAllDataList();
    this.dataListFacadeService.datas$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {
          this.dataList = list;      
      });
      const total = this.dataList.filter(y => y.amount);
      for(const amount of total){
        this.allTotal.push(Number(amount.amount));
      } 
      this.allTotal.map((list) => this.total += list)      
  }

  createCokieDiagram(){
    Chart.register(...registerables);
    let myChart = new Chart("pieDiagram", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Green', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
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
