import { Injectable } from '@angular/core';

export interface Meter {
  id: string;
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

  getAll(){
    return [...mockMeter];
  }
}
