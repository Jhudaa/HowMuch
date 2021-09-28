import { Component, OnInit } from '@angular/core';
import { Meter, MyMeterService } from '../my-meter.service';

@Component({
  selector: 'app-my-meters',
  templateUrl: './my-meters.page.html',
  styleUrls: ['./my-meters.page.scss'],
})
export class MyMetersPage implements OnInit {
  
  constructor(private myMeterService:MyMeterService) { }

  meters:Meter[];
  customMeter = [];
  //get all my meter. This meters is for demon only
  ngOnInit() {
    this.meters = this.myMeterService.getAll();
    this.customMeter = this.getAllCustomInput();
  }

  //to get all the custom meter from myMeterService
  getAllCustomInput () {
    this.customMeter = this.myMeterService.getAllCustomInput();

    return this.customMeter;
  }

  /**
   * delete one selected meter
   * @param value the key of the meter to delete
   */
  deleteMeter(value:string){
    this.myMeterService.deleteMeter(value);
  }

}
