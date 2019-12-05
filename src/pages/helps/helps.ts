import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the HelpsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helps',
  templateUrl: 'helps.html',
})
export class HelpsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private document: DocumentViewer, private file: File
    , private platform: Platform ) {
  }

  documentOne(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 1'
    }
    this.document.viewDocument(filePath + '/cortes.pdf', 'application/pdf', options);
  

  }
  documentTwo(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 2'
    }
    this.document.viewDocument(filePath + '/cobra.pdf', 'application/pdf', options);
  

  }

  documentThree(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 3'
    }
    this.document.viewDocument(filePath + '/torção.pdf', 'application/pdf', options);
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpsPage');
  }

}
