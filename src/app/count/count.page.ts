import { Component, OnInit } from '@angular/core';
import { Meter, MyMeterService } from '../my-meter.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.page.html',
  styleUrls: ['./count.page.scss'],
})
export class CountPage implements OnInit {

  constructor(private MyMeterService:MyMeterService) { }

  meters:Meter[];

  ngOnInit() {
    this.meters = this.MyMeterService.getAll();
  }

}
