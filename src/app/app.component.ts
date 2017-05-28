import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './short.css', './print.css']
})
export class AppComponent {
  private dataDirectory = 'data/';
  private jsonMainFile = 'main.json';
  private jsonLabelsFile = 'labels.json';
  private jsonDataFile = 'data.json';
  disable: String[];
  labels: any;
  data: any;

  constructor(private http: Http) {
  }

  async ngOnInit() {
    let main = (await this.http.get(this.dataDirectory + this.jsonMainFile).toPromise()).json();
    this.disable = main.disable;
    this.labels = (await this.http.get(this.dataDirectory + main.language + '/' + this.jsonLabelsFile).toPromise()).json();
    this.data = (await this.http.get(this.dataDirectory + main.language + '/' + this.jsonDataFile).toPromise()).json();
  }
}
