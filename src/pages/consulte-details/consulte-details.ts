import { GeneralProvider } from './../../providers/general/general';
import { ConsultProvider } from './../../providers/consult/consult';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController, AlertController } from 'ionic-angular';
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
@IonicPage()
@Component({
  selector: 'page-consulte-details',
  templateUrl: 'consulte-details.html',
})
export class ConsulteDetailsPage {
  consultDetails: any
  loader: any
  attach: any
  waiting: boolean = false
  data: any = {}
  constructor(public navCtrl: NavController,
    private transfer: FileTransfer,
    private actionSheet: ActionSheetController,
    private generalService: GeneralProvider,
    private loaderCtrl: LoadingController,
    private alertCtrl: AlertController,
    private consultService: ConsultProvider,
    private camera: Camera,
    public navParams: NavParams) {
    this.consultDetails = this.navParams.get('consultDetails')
  }


  loading() {
    this.loader = this.loaderCtrl.create({
      content: 'انتظر...'
    });
    this.loader.present();
  }


  uploadPic() {
    let actionSheet = this.actionSheet.create({
      title: 'Choose Picture Source',
      buttons: [
        {
          text: 'Gallery',
          icon: 'albums',
          handler: () => {
            this.actionHandler(1);
          }
        },
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.actionHandler(2);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    return actionSheet.present();
  }



  private actionHandler(selection: any): any {
    var options: any;

    if (selection == 1) {
      options = {
        quality: 50,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 200,
        targetHeight: 200,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };
    } else {
      options = {
        quality: 50,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: this.camera.EncodingType.JPEG,
        targetWidth: 200,
        targetHeight: 200,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };
    }

    this.camera.getPicture(options).then(
      (imgUrl) => {
        // this.loading()
        let fileName = imgUrl.substr(imgUrl.lastIndexOf('/') + 1);
        var server = `https://myway.maxsys.sa/api/v1/consults/upload-file`;
        let options = {
          fileKey: 'file',
          chunkedMode: false,
          mimeType: 'image/jpg'
        };
        const fileTransfer: FileTransferObject = this.transfer.create();
        fileTransfer.upload(imgUrl, server, options).then(
          (entry) => {
            console.log('entry : ', JSON.stringify(entry))
            this.attach = JSON.parse(entry.response)['file_data']
            // this.loader.dismiss()
          },
          (err) => {
            alert('err' + JSON.stringify(err));
            console.log(err);
            // this.loader.dismiss();
          }
        );
      },
      (err) => {
        // alert(JSON.stringify(err))
      }
    );
  }

  send() {
    this.waiting = true
    this.data.attach = this.attach
    console.log("complate data : ", JSON.stringify(this.data));
    this.data.consulter_id = this.consultDetails.id
    this.consultService.sendRequestToConsult(this.data).subscribe(data => {
      if (data.success) {
         this.showAlert()
      } else {
        this.generalService.showError(data.errors)
      }
      this.waiting = false
      console.log("return data is : ", data);
    })
  }



  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'نجاح',
      subTitle: 'تم الارسال بنجاح',
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.data = {}
            this.navCtrl.pop()
            console.log('Agree clicked');
          }
        }
      ]
    });
    alert.present();
  }



}
