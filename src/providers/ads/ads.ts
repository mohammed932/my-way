import { SettingProvider } from './../setting/setting';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdsProvider {

  constructor(public http: HttpClient, private settingService: SettingProvider) {
  }

  getAds(page): Observable<any> {
    let url = `${this.settingService.URL}ads/index?page=${page}`
    return this.http.get(url);
  }

}
