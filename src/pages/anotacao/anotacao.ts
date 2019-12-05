import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ViagemPage} from '../viagem/viagem';
import { ToastController } from 'ionic-angular';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

 
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

/**
 * Generated class for the AnotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anotacao',
  templateUrl: 'anotacao.html',
})


export class AnotacaoPage {
  public viagens:any;
  public viagem:any;
  public indexViagem:any;
  public indexAnotacao:any;
  public anotacao:any;

  pdfObj = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,
    public toastController: ToastController, private file: File, private fileOpener: FileOpener, private plt: Platform) {
    this.viagens = localStorage.getItem('viagens');
    this.viagens = JSON.parse(this.viagens);
    this.indexViagem = localStorage.getItem('indexViagem');
    this.indexAnotacao = localStorage.getItem('indexAnotacao');
    console.log(this.indexViagem);
    this.viagem = this.viagens[this.indexViagem];
    console.log(this.viagens);
    this.anotacao = this.viagens[this.indexViagem].anotacoes[this.indexAnotacao];
    console.log(this.anotacao);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnotacaoPage');
  }

  alerta(){
    const toast = this.toastController.create({
      message: 'Função ainda não disponível',
      duration: 2000
    });
    toast.present();
  }

  apagarAnotacao(){
    let alert = this.alertCtrl.create({
      title: 'Apagar Ponto!',
      message: 'Você deseja mesmo apagar esse ponto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Apagar',
          handler: () => {
            this.viagens[this.indexViagem].anotacoes.splice(this.indexAnotacao,1);
            localStorage.setItem("viagens", JSON.stringify(this.viagens));
            this.navCtrl.pop();
          }
        } 
      ]
    });
    alert.present();
    
  }

  createPdf(){
    var docDefinition = {
      content: [
        { text: 'CADERNETA ONLINE', style: 'bigger' },
        { text: new Date().toTimeString(), alignment: 'right' },
 
        { text: 'Sobre a Viagem:', style: 'header' },
        
 
        { text: 'Titulo:', style: 'subheader' },
        { text: this.viagem.titulo },
        { text: 'Cidade:', style: 'subheader' },
        { text: this.viagem.cidade },
        { text: 'Quilometragem:', style: 'subheader' },
        { text: this.viagem.quilometragem },
        { text: 'Data de partida:', style: 'subheader' },
        { text: this.viagem.partidaData },
        { text: 'Hora de partida:', style: 'subheader' },
        { text: this.viagem.partidaHora },
        { text: 'Data de retorno:', style: 'subheader' },
        { text: this.viagem.retornoData },
        { text: 'Hora de partida:', style: 'subheader' },
        { text: this.viagem.retornoHora },
        { text: 'Observações:', style: 'subheader' },
        { text: this.viagem.observacoes, style: 'story', margin: [0, 20, 0, 20] },

        { text: 'Informações do Ponto:', style: 'header' },
        { text: 'Titulo:', style: 'subheader' },
        { text: this.anotacao.titulo },
        { text: 'Data:', style: 'subheader' },
        { text: this.anotacao.data },
        { text: 'Hora:', style: 'subheader' },
        { text: this.anotacao.hora },
        { text: 'Coordenada X:', style: 'subheader' },
        { text: this.anotacao.coordenadaX },
        { text: 'Coordenada Y:', style: 'subheader' },
        { text: this.anotacao.coordenadaY },
        { text: 'Altitude:', style: 'subheader' },
        { text: this.anotacao.altitude },
        { text: 'Texto:', style: 'subheader' },
        { text: this.anotacao.texto, style: 'story', margin: [0, 20, 0, 20] },
        //{ text: 'Imagem:', style: 'subheader' },
        //{ image: 'base64image' },
        

 
        ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        },
        bigger: {
          fontSize: 20,
          bold: true,

        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.downloadPdf();
  }

  downloadPdf(){
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }

  }

}
