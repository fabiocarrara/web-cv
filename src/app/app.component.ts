import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.min.css', './app.component.css', './short.css', './print.css']
})
export class AppComponent {
  private dataDirectory = 'data/';
  private jsonMainFile = 'main.json';
  private jsonLabelsFile = 'labels.json';
  private jsonDataFile = 'data.json';
  labels: any;
  data: any;

  constructor(private http: Http) {
  }

  async ngOnInit() {
    let language = (await this.http.get(this.dataDirectory + this.jsonMainFile).toPromise()).json().language;
    this.labels = (await this.http.get(this.dataDirectory + language + '/' + this.jsonLabelsFile).toPromise()).json();
    this.data = (await this.http.get(this.dataDirectory + language + '/' + this.jsonDataFile).toPromise()).json();
  }
}
