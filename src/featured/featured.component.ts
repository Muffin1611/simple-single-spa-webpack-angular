import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

import { Concert } from './concert';

@Component({
  selector: 'angular-featured',
  template: `<div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>


      <div class="carousel-inner" role="listbox">
          <div class="item active">
              <img src="./static/ny.jpg" alt="New York">
              <div class="carousel-caption">
                  <h3>Featured</h3>
              </div>
          </div>
          <div class="item" *ngFor="let concert of featured">
              <img src="./static/{{concert.featuredImage}}" alt="Something">
              <div class="carousel-caption">
                  <h3>{{concert.name}}</h3>
              </div>
          </div>
      </div>

      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
      </a>
  </div>`,
  styles: [`#myCarousel {
      margin-top: 8em;
      margin-left: auto;
      margin-right: auto;
      width:50%;
      height:50%;
  }

  .carousel-inner img {
      -webkit-filter: grayscale(90%);
      filter: grayscale(90%); /* make all photos black and white */
      width: 100%;
      margin: auto;
  }

  .carousel-caption h3 {
      color: #fff !important;
  }

  @media (max-width: 600px) {
      .carousel-caption {
          display: none; /* Hide the carousel text when the screen is less than 600 pixels wide */
      }
  }`]
})

export class Featured implements OnInit {

    private concertsUrl = './static/concerts.json';

    concerts : Concert [];
    featured : Concert [];

    constructor (private httpService: HttpClient) {}

    ngOnInit() {
        this.httpService.get(this.concertsUrl)
            .subscribe(
                data => {
                    this.concerts = data["concerts"] as Concert [];
                    this.featured = this.concerts.filter((concert) => concert.featured);
                    console.log(this.featured);
                },
                (err: HttpErrorResponse) => {
                    console.log (err.message);
                }
            );

    }

}
