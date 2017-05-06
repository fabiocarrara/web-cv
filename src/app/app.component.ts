import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './bootstrap.min.css', './short.css', './print.css']
})
export class AppComponent {
  private jsonFile = 'data.json';
  personalData: any;
  education: any;
  jobs: any;
  languages: any;
  itSkills: any;
  presentations: any;
  publications: any;

  constructor(http: Http) {
    http
      .get(this.jsonFile)
      .map((res: Response) => this.readJson(res.json()))
      .catch(this.handleError)
      .subscribe();
  }

  private readJson(jsonData: any) {
    this.personalData = jsonData.personalData;
    this.education = jsonData.education;
    this.jobs = jsonData.jobs;
    this.languages = jsonData.languages;
    this.itSkills = jsonData.itSkills;
    this.presentations = jsonData.presentations;
    this.publications = jsonData.publications;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
