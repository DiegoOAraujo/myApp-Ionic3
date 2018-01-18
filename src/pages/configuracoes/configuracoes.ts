import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  rootPage = PerfilPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  openProfile() {
    this.navCtrl.push(PerfilPage);
  }
  openContact() {
    this.navCtrl.push(ContactPage);
  }
  openAbout() {
    this.navCtrl.push(AboutPage);
  }

}
