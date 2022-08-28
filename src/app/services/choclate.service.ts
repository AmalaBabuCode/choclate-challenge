import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, of } from 'rxjs';
import { DialogData } from '../components/choclate-detail/edit-choclate-details/edit-choclate-details.component';
import { ChoclateData } from '../models/choclate/choclate.model';
import { chocolateData } from '../shared/chocolate-data';
@Injectable({
  providedIn: 'root',
})
export class ChoclateService {
  chocolateData = chocolateData;
  transformedChoclateData: any[] = [];

  constructor(private http: HttpClient) {}

  getChoclateData(): Observable<any> {
    let url = '';
    // get request
    // return this.http.get<ChoclateData[]>(url).pipe(
    //   map((data: ChoclateData[]) => {
    //     if (data) {
    //       return data;
    //     }
    //   })
    // );

    return of(chocolateData.data);
  }

  saveChoclateDetails(payload: DialogData) {
    let url = '';
    this.http.post(url, payload).subscribe(
      (response) => {
        // handle response body
      },
      (error) => {
        // handle error response
      }
    );
  }
}
