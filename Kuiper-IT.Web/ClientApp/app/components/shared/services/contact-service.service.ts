import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ContactRequest } from '../classes/contact-request';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }
  
  sendContactRequest(contactRequest: ContactRequest): Promise<boolean> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('api/Data/SendContactRequest', JSON.stringify(contactRequest), { headers: headers })
      .toPromise()
      .then(response => response.json() as boolean)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
