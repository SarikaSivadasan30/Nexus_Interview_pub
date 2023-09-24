/* 
This example support/e2e.js is processed and
loaded automatically before your test files.

This is a great place to put global configuration and
behavior that modifies Cypress.
 
Read more here:
https://on.cypress.io/configuration
*/


// Ignore ResizeObserver error so that Cypress cannot fail.
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on("uncaught:exception", err => {
  // Return false to prevent Cypress from failing.
  if (resizeObserverLoopErrRe.test(err.message)) return false;
});
