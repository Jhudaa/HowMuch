import { Component, OnInit } from '@angular/core';
import { Meter, MyMeterService } from '../my-meter.service';

@Component({
  selector: 'app-my-meters',
  templateUrl: './my-meters.page.html',
  styleUrls: ['./my-meters.page.scss'],
})
export class MyMetersPage implements OnInit {
  
  constructor(private MyMeterService:MyMeterService) { }

  meters:Meter[];

  ngOnInit() {
    this.meters = this.MyMeterService.getAll();
  }

  edit(item:object) {

  }

}
