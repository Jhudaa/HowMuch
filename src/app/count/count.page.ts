import { Component, OnInit } from '@angular/core';
import { Meter, MyMeterService } from '../my-meter.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.page.html',
  styleUrls: ['./count.page.scss'],
})
export class CountPage implements OnInit {

  constructor(private MyMeterService:MyMeterService) { }

  count = 0;
  meterName = '';
  
  ngOnInit() {
  }

  /**
   * Call plusOne from my-meter.service 
   */
  plusOne(){
    this.count = this.MyMeterService.plusOne();
  }

  /**
   * Call removeOne from my-meter.service 
   */
  removeOne(){
    this.count = this.MyMeterService.removeOne();
  }

  /**
   * Call validateCount from my-meter.service with the name enter in the input
   */
  validateCount(){
    this.MyMeterService.validateCount(this.meterName);
  }
}
