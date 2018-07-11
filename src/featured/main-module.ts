import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {Featured} from './featured.component';
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
  declarations: [Featured],
  bootstrap: [Featured]
})
export default class MainModule {
}
