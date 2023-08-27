import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, toArray } from 'rxjs/operators';
import { NewWidget, Widget } from '../types/widget';

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  WIDGETS_URI =
    'https://4tng5yf0o6.execute-api.us-east-1.amazonaws.com/widgets';

  // delete widget URI is DELETE https://4tng5yf0o6.execute-api.us-east-1.amazonaws.com/widgets/<ID>

  constructor(private http: HttpClient) {}

  getAllWidgets(): Observable<NewWidget[]> {
    return this.http.get<any>(this.WIDGETS_URI).pipe(
      map((data) => Object.keys(data).map(k => data[k]))//this seems silly, but it works- there's gotta be a better way 
      //to do this, not using Object.keys. I'm missing something here I think!  :')
    );
  }

  deleteWidget(id:string){
    return this.http.delete(`${this.WIDGETS_URI}/${id}`)
  }
}
