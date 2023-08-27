import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewWidget } from '../../types/widget';


import { WidgetsService } from '../../services/widgets.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit, OnChanges, OnDestroy {
  widgets$:Subscription= new Subscription
  widgets:NewWidget[] = new Array<NewWidget>
  total:number = 0;
  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.getAllWidgets();
  }

  ngOnChanges(){
    this.calculateTotal();
  }

  ngOnDestroy(){
    this.widgets$.unsubscribe();
  }

  getAllWidgets() {
    this.widgets$ = this.widgetsService.getAllWidgets().subscribe({
      next: (data) => {
       this.widgets=data;
        this.calculateTotal();
      },
    });
  }

  deleteWidget(id:string){
   this.widgetsService.deleteWidget(id).subscribe({
     next:(data)=>{
       this.getAllWidgets();
     }
   })
  }

  calculateTotal(){
    this.total=0;
    this.widgets.forEach(widget=>this.total+=widget.price)
  }
}
