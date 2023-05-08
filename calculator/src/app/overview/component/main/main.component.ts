import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { DataListFacadeService } from 'src/app/facade/data-list-facade.service';
import { DataListModel } from 'src/app/interface/dataListModel';
import { TranslateService } from '@ngx-translate/core';
import { TransService } from 'src/app/service/trans.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(
    private formbuilder: FormBuilder,
    private dataListFacadeService: DataListFacadeService,
    public trans: TransService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'de']);
  }

  /**
   * Switch to language from selected
   * @param {string} language 
   */
  switchLang(language: string) {
    const lang = this.trans.switchLang(language);
  }

  /**
   * Reactive forms 
   */
  form = this.formbuilder.group({
    id: [null, Validators.required],
    description: ['', Validators.required],
    amount: ['', Validators.required],
    date: [new Date(), Validators.required],
    taking: [false],
    output: [false],
  });

  /**
   * All subjects
   */
  subscribtion$ = new Subject();

  /**
   * All datas from db.json
   */
  datas: DataListModel[] = [];


  /**
   * index from data list element
   */
  indexId: number = 0;

  /**
   * load the list
   */
  ngOnInit(): void {
    this.loadList();
  }

  /**
   * subscribe and push the 
   * value to the array this.datas
   */
  loadList() {
    this.dataListFacadeService.loadAllDataList();
    this.dataListFacadeService.datas$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {
        this.datas = list;
      });
  }

  /**
   * Add list to the this.datas array
   * @param {object} value 
   */
  add(value: any) {
    this.dataListFacadeService.addDataList(value);
    this.dataListFacadeService.addDataList$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {});
    window.location.reload();
  }

  /**
   * Edit a list element
   * @param {number} index 
   */
  editFromDataList(index: any) {
    const filtred = this.datas.find((same) => same.id === index.id);
    this.form.controls.description.setValue(filtred!.description);
    this.form.controls.amount.setValue(filtred!.amount);
    this.form.controls.output.setValue(filtred!.output);
    this.form.controls.taking.setValue(filtred!.taking);
    this.indexId = index;
  }

/**
 * Update a list element
 * @param {DataListModel} data 
 * @param {number} index 
 */
  putEdit(data: any, index: any) {
    this.dataListFacadeService.loadPutDataList(index.id, data);
    this.dataListFacadeService.putDataList$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((list) => {});
  }

  /**
   * Delete a list element 
   * @param {number} id 
   */
  deleteLists(id: any) {
    this.dataListFacadeService.deleteDataList(id.id);
    this.dataListFacadeService.deleteList$
      .pipe(takeUntil(this.subscribtion$))
      .subscribe((item) => {});
    window.location.reload();
  }

  /**
   * Destroy all subjects
   */
  ngOnDestroy(): void {
    this.subscribtion$.next(false);
    this.subscribtion$.complete();
  }
}
