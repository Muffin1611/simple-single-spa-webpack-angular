import * as singleSpa from 'single-spa';

singleSpa.registerApplication('angular-navbar', () =>
  import ('../navbar/navbar.js'), () => true);

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}