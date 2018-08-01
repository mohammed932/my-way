import { SettingProvider } from './../setting/setting';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConsultProvider {

  constructor(
    public http: HttpClient,
    private settingService: SettingProvider) {

  }

  getConsults(page): Observable<any> {
    let url = `${this.settingService.URL}consults/index?page=${page}`
    return this.http.get(url);
  }

  sendRequestToConsult(params): Observable<any> {
    let url = `${this.settingService.URL}consults/request`
    return this.http.post(url, JSON.stringify(params));
  }

  addConsult(params): Observable<any> {
    let url = `${this.settingService.URL}consults/join`
    return this.http.post(url, JSON.stringify(params));
  }

}
