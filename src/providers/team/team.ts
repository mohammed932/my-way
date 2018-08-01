import { SettingProvider } from './../setting/setting';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamProvider {

  constructor(
    public http: HttpClient,
    private settingService: SettingProvider) {

  }

  getTeams(page): Observable<any> {
    let url = `${this.settingService.URL}team/index?page=${page}`
    return this.http.get(url);
  }

}
