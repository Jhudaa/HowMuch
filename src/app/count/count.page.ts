import { Component, OnInit } from '@angular/core';
import { MyMeterService } from '../my-meter.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.page.html',
  styleUrls: ['./count.page.scss'],
})
/**
 * Management of the meter (add/remove/validate) 
 */
export class CountPage implements OnInit {

  
  constructor(public myMeterService:MyMeterService) 
  { 
    myMeterService = this.myMeterService; 
  }

  meterName = '';
  
  ngOnInit() {
  }

  /**
   * Call plusOne from my-meter.service 
   */
  plusOne(count){
    this.myMeterService.plusOne(count);
  }

  /**
   * Call removeOne from my-meter.service 
   */
  removeOne(count){
    this.myMeterService.removeOne(count);
  }

  /**
   * Call validateCount from my-meter.service with the name enter in the input
   */
  validateCount(){
    this.myMeterService.validateCount(this.meterName);
  }
}
