import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

import { Concert } from './concert';

@Component({
  selector: 'angular-concerts',
  template: `<div class="container text-center">
      <h2>Konzerte</h2><br/><br/><br/>
      <div class="row">
          <div class="col-sm-4" *ngFor="let concert of concerts">
              <a class="concertItem" href="#">
                  <p><strong>
                      {{concert.name}}
                  </strong><br/>
                  </p>
                  <img class="concertImg" src="./static/bandmember.jpg" alt="Random Name" width="150" height="150">
              </a>
              <p>
                  {{concert.events[0]}}<br/>
                  {{concert.events[1]}}
              </p>
          </div>
      </div>
  </div>`,
  styles: [`.container {
      margin-top: 6em;
      margin-bottom: 6em;
      padding: 40px 120px;
      background: lightgrey;
      border-radius: 24px;
  }

  a.concertItem {
      text-decoration: none;
      color: black;
  }

  .concertImg {
      border: 10px solid transparent;
  }

  .concertImg:hover {
      border-color: darkgrey;
  }`]
})

export class Concerts implements OnInit {

    private concertsUrl = './static/concerts.json';

    concerts : Concert [];

    constructor (private httpService: HttpClient) {}

    ngOnInit() {
        this.httpService.get(this.concertsUrl)
            .subscribe(
                data => {
                    this.concerts = data["concerts"] as Concert [];
                    console.log(this.concerts[1]);
                },
                (err: HttpErrorResponse) => {
                    console.log (err.message);
                }
            );

    }

}
