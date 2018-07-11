import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {Concerts} from './concerts.component';
import {enableProdMode} from '@angular/core';

try {
    enableProdMode();
} catch (err) {
    console.info('EnableProdMode already set')
}

@NgModule({
  imports: [
      BrowserModule,
      HttpClientModule
  ],
  declarations: [Concerts],
  bootstrap: [Concerts]
})
export default class MainModule {
}
