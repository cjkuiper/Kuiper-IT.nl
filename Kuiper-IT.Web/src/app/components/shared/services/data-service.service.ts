import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Project} from '../classes/project'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }

  getProjects(): Promise<Project[]> {
    return this.http.get('api/Data/Projects')
      .toPromise()
      .then(response => response.json() as Project[])
      .catch(this.handleError);
  }

  getProject(id: number): Promise<Project> {
    const url = 'api/Data/Project/'+id;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Project)
      .catch(this.handleError);
  }
 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
