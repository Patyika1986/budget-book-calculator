import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { DataListModel } from '../interface/dataListModel';
import { DataListService } from '../service/data-list.service';

@Injectable({
  providedIn: 'root'
})
export class DataListFacadeService implements OnDestroy {

  private _datas$ = new BehaviorSubject<DataListModel[]>([]);
  public datas$:Observable<DataListModel[]> = this._datas$.asObservable();

  private _addDataList$ = new BehaviorSubject<DataListModel[]>([]);
  public addDataList$:Observable<DataListModel[]> = this._addDataList$.asObservable();

  private _putDataList$ = new BehaviorSubject<DataListModel[]>([]);
  public putDataList$:Observable<DataListModel[]> = this._putDataList$.asObservable();

  private _deleteList$ = new BehaviorSubject<DataListModel[]>([]);
  public deleteList$:Observable<DataListModel[]> = this._deleteList$.asObservable();

  subscribtion$ = new Subject();
  constructor(private dataListService: DataListService) { }

  loadAllDataList():void {
    this.dataListService.getDataList().pipe(takeUntil(this.subscribtion$)).subscribe((list) => {
      this._datas$.next(list);
    });
  }

  addDataList(res:DataListModel[]): void{
    this.dataListService.postDataList(res).pipe(takeUntil(this.subscribtion$)).subscribe((list:DataListModel[]) => {
      this._addDataList$.next(list);
    });
  }

  loadPutDataList(id:number,data:DataListModel[]): void {
    this.dataListService.putDataList(id,data).pipe(takeUntil(this.subscribtion$)).subscribe((listId:DataListModel[]) => {
      this._putDataList$.next(listId);
    })
  }

  deleteDataList(id:number): void {
    this.dataListService.deleteList(id).pipe(takeUntil(this.subscribtion$)).subscribe((listId:DataListModel[]) => {
      this._deleteList$.next(listId);
    })
  }

  ngOnDestroy(): void {
    this.subscribtion$.next(false);
    this.subscribtion$.complete();
}
}
