import { Injectable } from '@angular/core';
import { DataListModel } from '../interface/dataListModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataListService {
  constructor(private http: HttpClient) {}

  /**
   * url 
   */
  url: string = 'http://localhost:3000/dataList';

  /**
   * id is a number
   * for update delete end edit
   */
  id: any;

  /**
   * Get all Datas from db.json
   * @returns {DataListModel}
   */
  getDataList(): Observable<DataListModel[]> {
    const datas = this.http.get<DataListModel[]>(this.url);
    return datas;
  }

  /**
   *  Add a list element to the list
   * @param {DataListModel} response 
   * @returns {DataListModel}
   */
  postDataList(response: DataListModel[]): Observable<DataListModel[]> {
    return this.http.post<DataListModel[]>(this.url, response);
  }

  /**
   * Update a list element
   * @param {number} id 
   * @param {DataListModel} data 
   * @returns {DataListModel} all datas
   */
  putDataList(id: number, data: DataListModel[]): Observable<DataListModel[]> {
    return this.http.put<DataListModel[]>(
      `http://localhost:3000/dataList/${id}`,
      data
    );
  }

  /**
   * Delete a list element 
   * @param {number} id 
   * @returns {DataListModel} return the same list element with id
   */
  deleteList(id: number): Observable<DataListModel[]> {
    return this.http.delete<DataListModel[]>(
      `http://localhost:3000/dataList/${id}`
    );
  }
}
