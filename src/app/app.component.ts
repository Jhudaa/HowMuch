import { Component } from '@angular/core';

export interface Page {
  title:string,
  url:string,
  icon:string
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages:Page[] = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'New meter',
      url: '/count',
      icon: 'add-circle'
    },
    {
      title: 'My meters',
      url: '/my-meters',
      icon: 'list'
    }
  ]
  constructor() {}
}
