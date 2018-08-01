import { SettingProvider } from './../setting/setting';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GuideProvider {

  constructor(
    public http: HttpClient,
    private settingService: SettingProvider) {

  }

  getGuides(): Observable<any> {
    let url = `${this.settingService.URL}guide/index`
    return this.http.get(url);
  }

}
