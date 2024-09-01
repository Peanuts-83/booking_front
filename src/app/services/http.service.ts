import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Api } from '../models/api.interface'

@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {
  private baseApi = 'http://127.0.0.1:8000/booking/api'
  public api: Api = { path: '/booking' }

  constructor(public http: HttpClient) { }

  public getList(paramList: any): Observable<{data: T[], metas: any[]}> {
    return this.http.post<{data: T[], metas: any[]}>(this.baseApi + this.api.path, paramList)
  }
}
