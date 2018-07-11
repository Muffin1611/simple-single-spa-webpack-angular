import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Footer} from './footer.component';
import {enableProdMode} from '@angular/core';

try {
    enableProdMode();
} catch (err) {
    console.info('EnableProdMode already set')
}

@NgModule({
  imports: [BrowserModule],
  declarations: [Footer],
  bootstrap: [Footer]
})
export default class MainModule {
}
