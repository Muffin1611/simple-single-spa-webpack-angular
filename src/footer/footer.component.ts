import {Component} from '@angular/core';

@Component({
  selector: 'angular-footer',
  template:
  `<footer class="container-fluid bg-4 text-center" id="myFooter">
      <p>Example Footer made by Marvin Dick</p>
  </footer>`,
  styles:
  [`#myFooter {
      padding-top: 70px;
      padding-bottom: 70px;
  }

  .bg-4 {
      background-color: #2f2f2f;
      color: #ffffff;
  }`]
})

export class Footer {

}
