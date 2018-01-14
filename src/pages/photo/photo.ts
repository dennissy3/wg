import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';





@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
 
  constructor(public navCtrl: NavController, private camera: Camera) { 
this.camera.getPicture(options).then((imageData) => {
	 // imageData is either a base64 encoded string or a file URI
	 // If it's base64:
	 let base64Image = 'data:image/jpeg;base64,' + imageData;
	 this.navCtrl.setRoot(location)
	}, (err) => {
	 // Handle error
	});
  }

  const options: CameraOptions = {
  	quality: 100,
  	destinationType: this.camera.DestinationType.DATA_URL,
  	encodingType: this.camera.EncodingType.JPEG,
  	mediaType: this.camera.MediaType.PICTURE
	}


}

