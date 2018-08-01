import { globalInterceptor } from './../providers/global-headers/global-headers';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { SettingProvider } from '../providers/setting/setting';
import { ApiProvider } from '../providers/api/api';
import { GuideProvider } from '../providers/guide/guide';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { GeneralProvider } from '../providers/general/general';
import { AdsProvider } from '../providers/ads/ads';
import { ConsultProvider } from '../providers/consult/consult';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { TeamProvider } from '../providers/team/team';
import { EmailComposer } from '@ionic-native/email-composer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      pageTransition: 'ios-transition',
      mode: 'ios',
      prodMode: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: globalInterceptor,
      multi: true
    },
    SettingProvider,
    ApiProvider,
    GuideProvider,
    GeneralProvider,
    AdsProvider,
    FileTransfer,
    EmailComposer,
    InAppBrowser,
    ConsultProvider,
    File,
    Camera,
    TeamProvider
  ]
})
export class AppModule { }
