import { Component, OnInit } from '@angular/core';
import { MyMeterService } from '../my-meter.service';

/**
 * Class used for the management of the setting page
 */
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private MyMeterService:MyMeterService) { }

  ngOnInit() {
  }
  //Calls the delete function of myMeterService
  localStorageDeleteAlert(value){
    this.MyMeterService.DeleteAlert(value);
  }
}
