import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import {ViagemPage} from '../viagem/viagem';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotosProvider } from '../../providers/photos/photos';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the CadastroAnotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-anotacao',
  templateUrl: 'cadastro-anotacao.html',
})
export class CadastroAnotacaoPage {

  [x: string]: any;
  photos: any;
  imagem: string = '';
  public cadastroForm = {
    titulo:"",
    data:"",
    hora:"",
    coordenadaX:"",
    coordenadaY:"",
    altitude:"",
    texto:"",
    imagem:[]
  }

  public viagens: any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private camera: Camera,private alertCtrl: AlertController,
    public toastController: ToastController, private photoservice: PhotosProvider, 
    private document: DocumentViewer, private file: File) {
    this.cadastroForm = {
      titulo:"",
      data:"",
      hora:"",
      coordenadaX:"",
      coordenadaY:"",
      altitude:"",
      texto:"",
      imagem:[],
    }
    this.viagens = localStorage.getItem('viagens');
    
  }
  setData(data: string, hora: string, coordenadas: string, texto: string, titulo:string, coordenadaX: string, coordenadaY:string, altitude: string, imagem: string){
    let cadastroForm = {
      titulo:"",
      data:"",
      hora:"",
      coordenadaX:"",
      coordenadaY:"",
      altitude:"",
      texto:"",
      imagem:"",
    } 
    cadastroForm.titulo = titulo;
    cadastroForm.data = data;
    cadastroForm.hora = hora;
    cadastroForm.coordenadaX = coordenadaX;
    cadastroForm.coordenadaY = coordenadaY;
    cadastroForm.altitude = altitude;
    cadastroForm.texto = texto;
    cadastroForm.imagem = imagem;

  }
  logForm(){
    //this.cadastroForm.imagem = this.imagem;
    this.viagens = localStorage.getItem('viagens');
    this.viagens = JSON.parse(this.viagens);
    this.viagens[localStorage.getItem("indexViagem")].anotacoes.push(this.cadastroForm);
    localStorage.setItem("viagens",JSON.stringify(this.viagens));
  }
  
  getData(){
    return localStorage.getItem("viagens");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroAnotacaoPage');
  }

  goViagem(){
    this.navCtrl.pop();
  }

  cameraOptions(){
    let alert = this.alertCtrl.create({
      title: 'Adicionar Fotos',
      buttons: [
        {
          text: 'Abrir câmera',
          handler: () => {
            this.openCamera();
          }
        },
        {
          text: 'Selecionar do Dispositivo',
          handler: () => {
            this.openGallery();
          }
        }
      ]
    });
    alert.present();
    
  }
  openCamera(){
    this.imagem = '';
 
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      saveToPhotoAlbum: true
      
      /*targetWidth: 100,
      targetHeight: 100*/
    }
 
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.imagem = base64image;
        //this.imagens.push(this.imagem);
        this.cadastroForm.imagem.push(this.imagem);
 
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      });
      
  }
  openGallery(){
    this.imagem = '';
 
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    }
 
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.imagem = base64image;
        //this.imagens.push(this.imagem);
        this.cadastroForm.imagem.push(this.imagem);
 
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      });

      

  }
  saveImage(){

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

  MaterialdeApoio(){
    let alert = this.alertCtrl.create({
      title: 'Consultar Material:',
      
      buttons: [
        {
          text: 'Diagrama de Rochas:',
          
          handler: () => {
            this.documentOne();
          }
        },
        {
          text: 'Tipos de Rochas',
          handler: () => {
            this.documentTwo();
            
          }
        },
        {
          text: 'Rochas 01',
          handler: () => {
            this.documentThree();
            
          }
        },
        {
          text: 'Rochas 02',
          handler: () => {
            this.documentFour();
            
          }
        },
        {
          text: 'Rochas 03',
          handler: () => {
            this.documentFive();
            
          }
        }, 
        {
          text: 'Escalas',
          handler: () => {
            this.documentSix();
            
          }
        }, 
        {
          text: 'Pressões',
          handler: () => {
            this.documentSeven();
            
          }
        },
        {
          text: 'Outros',
          handler: () => {
            this.documentEight();
            
          }
        }
      ]
    });
    alert.present();
    
  }

}