import { Injectable, OnInit } from '@angular/core';
import { Haptics } from '@capacitor/haptics';

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

  constructor() { }

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

  edit(item:object) {

  }
}
