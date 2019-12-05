import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPage } from '../add/add';
import { HomePage } from '../home/home';

/**
 * Generated class for the ListcheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listcheck',
  templateUrl: 'listcheck.html',
})
export class ListcheckPage {

  /*checklist: Array<string> = ['GPS','Oculos','Bússola'];
  newObj(){
    
  }*/

  public todoList = JSON.parse(localStorage.getItem("todos"));
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todoList = JSON.parse(localStorage.getItem("todos"));
    if(!this.todoList) {
        this.todoList = [''];
    }
    
    
    
  }
  ionViewDidEnter(){
    
  }
  ionViewWillEnter() {
    this.todoList = JSON.parse(localStorage.getItem("todos"));
    if(!this.todoList) {
        this.todoList = [''];
    }
}
  delete(index: number) {
    this.todoList.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todoList));
}
  add() {
  this.navCtrl.push(AddPage);
}

goHome(){
  this.navCtrl.push(HomePage);
}
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistPage');
    console.log(this.todoList);
  }

}



