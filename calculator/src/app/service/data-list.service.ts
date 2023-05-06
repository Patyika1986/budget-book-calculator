import { Injectable } from '@angular/core';
import { DataListModel } from '../interface/dataListModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataListService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:3000/dataList';
  id: any;

  getDataList(): Observable<DataListModel[]> {
    const datas = this.http.get<DataListModel[]>(this.url);
    return datas;
  }

  postDataList(response: DataListModel[]): Observable<DataListModel[]> {
    return this.http.post<DataListModel[]>(this.url, response);
  }

  putDataList(id: number, data: DataListModel[]): Observable<DataListModel[]> {
    return this.http.put<DataListModel[]>(
      `http://localhost:3000/dataList/${id}`,
      data
    );
  }

  deleteList(id: number): Observable<DataListModel[]> {
    return this.http.delete<DataListModel[]>(
      `http://localhost:3000/dataList/${id}`
    );
  }
}
