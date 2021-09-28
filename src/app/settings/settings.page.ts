import { Component, OnInit } from '@angular/core';
import { MyMeterService } from '../my-meter.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private MyMeterService:MyMeterService) { }

  ngOnInit() {
  }

  localStorageDeleteAlert(value){
    this.MyMeterService.DeleteAlert(value);
  }
}
