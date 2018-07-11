import * as singleSpa from 'single-spa';

singleSpa.registerApplication('angular-navbar', () =>
  import ('../navbar/navbar.js'), () => true);

singleSpa.registerApplication('angular-featured', () =>
    import ('../featured/featured.js'), () => true);

singleSpa.registerApplication('angular-concerts', () =>
    import ('../concerts/concerts.js'), () => true);

singleSpa.registerApplication('angular-footer', () =>
    import ('../footer/footer.js'), () => true);

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}