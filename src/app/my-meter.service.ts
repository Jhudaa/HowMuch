import { Injectable, OnInit } from '@angular/core';
import { Haptics } from '@capacitor/haptics';
import {AlertController, ToastController} from '@ionic/angular';


export interface Meter {
  id?: string;
  meterName: string;
  meterCount: number;
  thumbnail?: string;
  }
  
  const mockMeter: Meter[] =
  [
  {id: '1', meterName : 'firstMeter' , meterCount: 2, thumbnail:'assets/imgs/circle-icons-fusee.png'},
  {id: '2', meterName : 'secondMeter' , meterCount: 85}
  ]

@Injectable({
  providedIn: 'root'
})
export class MyMeterService {

  constructor(private toastController: ToastController, private alertController: AlertController) { }

  meters:Meter[];
  customMeter = [];
  count = 0;

  getAll(){
    return [...mockMeter];
  }

  /* Make the device vibrate */
  async hapticsVibrate() {
    await Haptics.vibrate();
  };
  
  /**
   * add +1 to the count
   */
   plusOne(){
    this.count = this.count +1 ;
    this.hapticsVibrate();
    return this.count;
  }

  /**
   * Remove one to the count
   */
  removeOne(){
    this.count = this.count - 1 ;
    return this.count;
  }

  /**
   * Fonction to validate the count and create the new meter with is name and count value
   */
  validateCount(meterName){
    let data = {
        countValue: this.count
    };
    let meterCount = JSON.stringify(data);
    localStorage.setItem(meterName , meterCount);
  }

  /**
   * get the elements of the localStorage
   * @returns array with meterName + countValue
   */
  getAllCustomInput () {
    let keys = Object.keys(localStorage);
    console.log(keys);

    keys.forEach(elt => {
      let json = localStorage.getItem(elt);
      const data = JSON.parse(json);
      let meterCount = data.countValue;
      let dataMeter = {
        meterName: elt,
        countValue: meterCount
      }
      this.customMeter.push(dataMeter);
      console.log(this.customMeter);
    });

    return this.customMeter;
  }

  /**
   * Modal display to confirm delete 
   * @param value used to check where where called the method to display specific message
   */
   async DeleteAlert(value) {
    let headerMessage ='';
    if (value === 'localStorageClear') {
      headerMessage = 'Attention vous allez supprimer toutes vos fiches';
    } else {
      headerMessage = 'Attention vous êtes sur le point de procéder à une suppression';
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
          handler: () => this.delete(value)
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

  delete(value) {
    switch (value) {
      case 'localStorageClear':
        this.clearLocalStorage();
      break;
      default:
        console.log('suppression par default à coder');
    }
  }
   /**
   * clear totality of localStorage witch custom message
   */
    clearLocalStorage(){
      let message = 'Toutes vos fiches ont été supprimées';
      localStorage.clear();
      this.deleteConfirmationToast(message);
    }

  edit(item:object) {

  }
}
