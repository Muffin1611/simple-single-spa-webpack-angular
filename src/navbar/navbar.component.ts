import {Component} from '@angular/core';

@Component({
  selector: 'angular-navbar',
  template: `<nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#home">Logo</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                  <li><a href="#home">HOME</a></li>
                  <li><a href="#login">ANMELDEN</a></li>
                  <li><a href="#contact">KONTAKT</a></li>
                  <li class="dropdown">
                      <a class="dropdown-toggle" data-toggle="dropdown" href="#more">MEHR
                          <span class="caret"></span>
                      </a>
                      <ul class="dropdown-menu">
                          <li><a href="#merchandise">Merchandise</a></li>
                          <li><a href="#extras">Extras</a></li>
                          <li><a href="#media">Media</a></li>
                      </ul>
                  </li>
                  <li><a href="#search"><span class="glyphicon glyphicon-search"></span></a></li>
              </ul>
          </div>
      </div>
  </nav>`,
  styles: [`.navbar {
      margin-bottom: 0;
      background-color: #2d2d30 !important;
      border: 0;
      font-size: 11px !important;
      letter-spacing: 4px;
  }

  /* Add a gray color to all navbar links */
  .navbar li a, .navbar .navbar-brand {
      color: #d5d5d5 !important;
  }

  /* On hover, the links will turn white */
  .navbar-nav li a:hover {
      color: #fff !important;
  }

  /* The active link */
  .navbar-nav li.active a {
      color: #fff !important;
      background-color:#29292c !important;
  }

  /* Remove border color from the collapsible button */
  .navbar-default .navbar-toggle {
      border-color: transparent;
  }

  /* Dropdown */
  .open .dropdown-toggle {
      color: #fff ;
      background-color: #555 !important;
  }

  /* Dropdown links */
  .dropdown-menu li a {
      color: #000 !important;
  }

  /* On hover, the dropdown links will turn red */
  .dropdown-menu li a:hover {
      background-color: red !important;
  }`]
})

export class Navbar {

}
