import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class HeroService {
  private dataUrl = 'localhost:8091'; //url to data api

  constructor (private http: Http) {}

  getSalesData(): Observable<Hero[]> {
    return this.http.get(this.dataUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceOf Response){
      const body = error.json() || '';
      const err = body.error || json.stringify(body);

      errMsg = ${error.status} - ${error.statusText || ' ' } ${err};
    } else {
      errMsg = error.message ? error.message : error.tostring();
    }
    console.error(errMsg)
  }
}
