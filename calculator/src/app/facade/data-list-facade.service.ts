import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { DataListModel } from '../interface/dataListModel';
import { DataListService } from '../service/data-list.service';

@Injectable({
  providedIn: 'root'
})
export class DataListFacadeService implements OnDestroy {

  /**
   *  Get all Datas
   */
  private _datas$ = new BehaviorSubject<DataListModel[]>([]);
  public datas$:Observable<DataListModel[]> = this._datas$.asObservable();

  /**
   * Add data to list
   */
  private _addDataList$ = new BehaviorSubject<DataListModel[]>([]);
  public addDataList$:Observable<DataListModel[]> = this._addDataList$.asObservable();

  /**
   * Update a list
   */
  private _putDataList$ = new BehaviorSubject<DataListModel[]>([]);
  public putDataList$:Observable<DataListModel[]> = this._putDataList$.asObservable();

  /**
   * Delete a list element
   */
  private _deleteList$ = new BehaviorSubject<DataListModel[]>([]);
  public deleteList$:Observable<DataListModel[]> = this._deleteList$.asObservable();

  /**
   * All subscibe destroy
   */
  subscribtion$ = new Subject();
  constructor(private dataListService: DataListService) { }

  /**
   * Load all Data List
   */
  loadAllDataList():void {
    this.dataListService.getDataList().pipe(takeUntil(this.subscribtion$)).subscribe((list) => {
      this._datas$.next(list);
    });
  }

  /**
   * Add a list to the list
   * @param {DataListModel} res
   */
  addDataList(res:DataListModel[]): void{
    this.dataListService.postDataList(res).pipe(takeUntil(this.subscribtion$)).subscribe((list:DataListModel[]) => {
      this._addDataList$.next(list);
    });
  }

  /**
   * Update a list element
   * @param {number} id
   * @param {DataListModel} data 
   */
  loadPutDataList(id:number,data:DataListModel[]): void {
    this.dataListService.putDataList(id,data).pipe(takeUntil(this.subscribtion$)).subscribe((listId:DataListModel[]) => {
      this._putDataList$.next(listId);
    })
  }

  /**
   * Delete a list element
   * @param {number} id 
   */
  deleteDataList(id:number): void {
    this.dataListService.deleteList(id).pipe(takeUntil(this.subscribtion$)).subscribe((listId:DataListModel[]) => {
      this._deleteList$.next(listId);
    })
  }

  /**
   * Destroy all subscibes
   */
  ngOnDestroy(): void {
    this.subscribtion$.next(false);
    this.subscribtion$.complete();
}
}
