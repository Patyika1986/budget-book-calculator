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
export class BalanceOverviewComponent implements OnInit{

  constructor(private router: Router, private dataListFacadeService: DataListFacadeService) { }

  subscribtion$ = new Subject();

  /**
   * When taking true is then push the amount in 
   * allOutputs number array
   */
  allTakings:number[] = [];
  takings = 0;

  /**
   * When outputs true is then push the amount in 
   * allOutputs number array
   */
  allOutputs:number[] = [];
  outputs = 0;

  /**
   * Bilanz from taking
   * and ouptut
   */
  allTotal:number[] = [];
  bilanz = 0;

/**
 * All data list
 */
  dataList: DataListModel[] = [];

  /**
   * All Methods call on ngOnInit
   */
   ngOnInit(): void {
    this.getDatas();
    this.getTaking();
    this.getOutput();
    this.getBilanz();
    this.createCokieDiagram();
  }

  /**
   * Navigate to Overview to default path
   */
  backToMain(){
    this.router.navigate(['overview']);
  }

  /**
   * Get all datas
   * and push in Array this.dataList
   */
  getDatas(){
    this.dataListFacadeService.loadAllDataList();
    this.dataListFacadeService.datas$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {
          this.dataList = list;
      });
  }

  /**
   * Get all list where taking true is
   * and calculat the amount
   * push they all in this.allTakings array
   */
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

    /**
   * Get all list where output true is
   * and calculat the amount
   * push they all in this.allOutputs array
   */
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

  /**
   * Get Bilanz
   * calculat the sum from taking 
   */
  getBilanz(){
    this.dataListFacadeService.loadAllDataList();
    this.dataListFacadeService.datas$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {
          this.dataList = list;      
      });
      const bilanz = this.dataList.filter(y => y.amount);
      for(const amount of bilanz){
        this.allTotal.push(Number(amount.amount));
      } 
      this.allTotal.map((list) => this.bilanz += list - this.outputs)      
  }

  /**
   * Create a Cokie Diagramm
   * This is from library Chart.js
   */
  createCokieDiagram(){
    Chart.register(...registerables);
    let myChart = new Chart("pieDiagram", {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: 'Aus und Einnahmen',
          data: [this.takings, this.outputs, this.bilanz],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            min:0,
            max:100,
            beginAtZero: true
          }
        }
      }
    });
    myChart.reset()
  }

  /**
   * Destroy all subscribe
   */
  ngOnDestroy(): void {
    this.subscribtion$.next(false);
    this.subscribtion$.complete();
  }

}
