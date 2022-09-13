//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  datax: any;

  constructor() {}

  ngOnInit() {
    fetch('./assets/data/quran_id.json').then(res => res.json())
    .then(json => {
      this.datax = json;
    });
  }

}
