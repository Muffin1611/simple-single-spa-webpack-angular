import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Navbar} from './navbar.component';
import {enableProdMode} from '@angular/core';
enableProdMode();

@NgModule({
  imports: [BrowserModule],
  declarations: [Navbar],
  bootstrap: [Navbar]
})
export default class MainModule {
}
