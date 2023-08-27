import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';


import {WidgetModule} from './widget/widget.module'

@Component({
  selector: 'my-app',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    MatToolbarModule,
    RouterModule,
    WidgetModule
  ]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}