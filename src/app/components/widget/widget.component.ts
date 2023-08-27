import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewWidget } from '../../types/widget';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {


  @Input() inputWidget!: NewWidget;
  @Output() deleteWidgetEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  deleteWidget(id:string){
    this.deleteWidgetEvent.emit(id)
  }

}