import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';


/**
 * Generated class for the MaterialDeApoioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material-de-apoio',
  templateUrl: 'material-de-apoio.html',
})
export class MaterialDeApoioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private document: DocumentViewer, private file: File
    , private platform: Platform) {
  }
  
  documentOne(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 1'
    }
    this.document.viewDocument(filePath + '/diagramasrochas.pdf', 'application/pdf', options);
  

  }
  documentTwo(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 2'
    }
    this.document.viewDocument(filePath + '/tiposderochas.pdf', 'application/pdf', options);
  

  }

  documentThree(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 2'
    }
    this.document.viewDocument(filePath + '/rochas1.pdf', 'application/pdf', options);
  

  }

  documentFour(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 2'
    }
    this.document.viewDocument(filePath + '/rochas2.pdf', 'application/pdf', options);
  

  }

  documentFive(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 2'
    }
    this.document.viewDocument(filePath + '/rochas3.pdf', 'application/pdf', options);
  

  }

  documentSix(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 2'
    }
    this.document.viewDocument(filePath + '/escalas.pdf', 'application/pdf', options);
  

  }

  documentSeven(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 2'
    }
    this.document.viewDocument(filePath + '/pressoes.pdf', 'application/pdf', options);
  

  }

  documentEight(){
    let filePath = this.file.applicationDirectory + 'www/assets';
    
    const options: DocumentViewerOptions = {
      title: 'Pdf 2'
    }
    this.document.viewDocument(filePath + '/outros.pdf', 'application/pdf', options);
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialDeApoioPage');
  }

}

