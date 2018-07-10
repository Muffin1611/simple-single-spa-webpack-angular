import * as singleSpa from 'single-spa';

singleSpa.registerApplication('app-2', () =>
  import ('../app2/app2.js'), () => true);

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}