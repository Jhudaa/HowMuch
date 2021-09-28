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
/**
 * class create to manage method from count page, setting, my
 */
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
   plusOne(count?:number){
     if (count) {
      this.count = count;
     }
     this.count = this.count +1 ;
     this.hapticsVibrate();
    return this.count;
  }

  /**
   * Remove one to the count
   */
  removeOne(count?:number){
    if (count) {
      this.count = count;
    }
    this.count = this.count - 1 ;
    return this.count;
  }

  //TODO : le if ne fonctionne pas
  /**
   * Fonction to validate the count and create the new meter with is name and count value
   */
  validateCount(meterName:string){
    if (meterName) {
      let data = {
        countValue: this.count
    };
    let meterCount = JSON.stringify(data);
    localStorage.setItem(meterName , meterCount);
    } else {
      console.log('pas de nom renseigné');
    }
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
   async DeleteAlert(value:string) {
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
   * @param deleteMessage specific message used to be displayed
   */
   async deleteConfirmationToast(deleteMessage:string) {
     window.location.reload();
    const toast = await this.toastController.create({
      message: deleteMessage,
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

  /**
   * delete with different case depending where they come from
   * @param value string where the delete come from
   */
  delete(value:string) {
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

    deleteMeter(value:string){
      console.log(value);
      localStorage.removeItem(value);
      let message = 'Le compteur ' + value + ' à été effacé ! '
      this.deleteConfirmationToast(message);
    }

  //TODO : faire la fonction pour editer les meters
  /*edit(item:object) {

  }*/
}
