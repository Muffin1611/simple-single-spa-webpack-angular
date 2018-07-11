import 'zone.js';
import 'reflect-metadata';
import singleSpaAngular from 'single-spa-angular2';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import mainModule from './main-module.ts';

const ngLifecycles = singleSpaAngular({
  domElementGetter: () => document.getElementById('angular-featured'),
  mainModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<angular-featured />`,
})

export function bootstrap(props) {
  return ngLifecycles.bootstrap(props);
}

export function mount(props) {
  return ngLifecycles.mount(props).then(val => {});
}

export function unmount(props) {
  return ngLifecycles.unmount(props);
}