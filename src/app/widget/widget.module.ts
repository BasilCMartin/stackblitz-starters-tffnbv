import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WidgetComponent} from '../components/widget/widget.component'
import { ContainerComponent } from '../components/container/container.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  declarations: [WidgetComponent,
    ContainerComponent],
  exports:[WidgetComponent,
    ContainerComponent]
})
export class WidgetModule { }