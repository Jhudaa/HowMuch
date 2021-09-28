import { Component, OnInit } from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    value:string = '';

  constructor(private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }

  /**
   * clear totality of localStorage witch custom message
   */
   clearLocalStorage(){
    let message = 'Toutes vos fiches ont été supprimées';
    localStorage.clear();
    this.deleteConfirmationToast(message);
  }
  
  /**
   * Modal display to confirm delete 
   * @param value used to check where where called the method to display specific message
   */
  async localStorageDeleteAlert(value) {
    console.log(value);
    let headerMessage ='';
    if (value === 'localStorageClear') {
      headerMessage = 'Attention vous allez supprimer toutes vos fiches';
    } else {
      headerMessage = 'Attention vous êtes sur le point de procéder à une suppression'
    }

    const alert = await this.alertController.create({
      cssClass: 'alertDelete',
      header: headerMessage,
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

  /**
   * Toast to confirm delete
   * @param deleteMessage specific message used to be display
   */
  async deleteConfirmationToast(deleteMessage) {
    const toast = await this.toastController.create({
      message: deleteMessage,
      duration: 1000,
      position: 'top'
    });
   toast.present();
  }
  
}
