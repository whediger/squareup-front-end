import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Sales } from './salesData';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
//TODO reduce rxjs library to use only what is needed

@Injectable()
export class DataService {
  private dataUrl = 'app/results-mock-api'; //url to data api

  constructor (private http: Http) {}

  getSalesData(): Promise<Sales>{
    return this.http.get(this.dataUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError)
  }


  //uncomment for api calls +==}========>
  // getSalesData(): Observable<Sales[]> {
  //
  //   return this.http.get(this.dataUrl)
  //                   .map(this.extractData)
  //                   .catch(this.handleError);
  // }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);

      errMsg = `${error.status} - ${error.statusText || ' ' } ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
