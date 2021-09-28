import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentDeleteAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alertDelete',
      header: 'Attention vous allez supprimer toutes vos fiches',
      subHeader: 'Veuillez confirmer',
      message: 'Cette action est iréversible',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        }, 
        {
          text: 'Supprimer',
          handler: () => this.clearLocalStorage()
        }
      ]
    });
    await alert.present();
  }

  clearLocalStorage(){
    localStorage.clear();
  }
}
