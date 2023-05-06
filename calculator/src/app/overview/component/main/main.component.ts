import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { DataListFacadeService } from 'src/app/facade/data-list-facade.service';
import { DataListModel } from 'src/app/interface/dataListModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(
    private formbuilder: FormBuilder,
    private dataListFacadeService: DataListFacadeService
  ) {}

  form = this.formbuilder.group({
    id: [null, Validators.required],
    description: ['', Validators.required],
    amount: ['', Validators.required],
    date: [new Date(), Validators.required],
    taking: [false],
    output: [false],
  });

  subscribtion$ = new Subject();

  datas: DataListModel[] = [];
  todayDate: Date = new Date();

  indexId: number = 0;

  ngOnInit(): void {
    this.loadList();
  }

  loadList() {
    this.dataListFacadeService.loadAllDataList();
    this.dataListFacadeService.datas$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {
        this.datas = list;
      });
  }

  add(value: any) {
    this.dataListFacadeService.addDataList(value);
    this.dataListFacadeService.addDataList$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {});
    window.location.reload();
  }

  editFromDataList(index: any) {
    const filtred = this.datas.find((same) => same.id === index.id);
    this.form.controls.description.setValue(filtred!.description);
    this.form.controls.amount.setValue(filtred!.amount);
    this.form.controls.output.setValue(filtred!.output);
    this.form.controls.taking.setValue(filtred!.taking);
    this.indexId = index;
  }

  putEdit(data: any, index: any) {
    this.dataListFacadeService.loadPutDataList(index.id, data);
    this.dataListFacadeService.putDataList$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {});
  }

  deleteLists(id: any) {
    this.dataListFacadeService.deleteDataList(id.id);
    this.dataListFacadeService.deleteList$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((item) => {});
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.subscribtion$.next(false);
    this.subscribtion$.complete();
  }
}
