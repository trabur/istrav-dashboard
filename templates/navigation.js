export let navigationTemplate = /*html*/`
<ul style="font-size: 1.4em; font-family: monospace; list-style-type: none; text-align: center; margin: 0; padding: 0;">
  <li><a href="#" onclick="onNavItemClick('/event-sources'); return false;">event.sources()</a></li>
  <li><a href="#" onclick="onNavItemClick('/event-backup'); return false;">event.backup()</a></li>
  <li><a href="#" onclick="onNavItemClick('/event-logging'); return false;">event.logging()</a></li>
  <li><a href="#" onclick="onNavItemClick('/tenant-accounts'); return false;">tenant.accounts()</a></li>
  <li><a href="#" onclick="onNavItemClick('/tenant-apps'); return false;">tenant.apps()</a></li>
  <li><a href="#" onclick="onNavItemClick('/account-users'); return false;">account.users()</a></li>
  <li><a href="#" onclick="onNavItemClick('/account-cart'); return false;">account.cart()</a></li>
  <li><a href="#" onclick="onNavItemClick('/account-orders'); return false;">account.orders()</a></li>
  <li><a href="#" onclick="onNavItemClick('/fleet-vehicles'); return false;">fleet.vehicles()</a></li>
  <li><a href="#" onclick="onNavItemClick('/fleet-employees'); return false;">fleet.employees()</a></li>
  <li><a href="#" onclick="onNavItemClick('/fleet-customers'); return false;">fleet.customers()</a></li>
  <li><a href="#" onclick="onNavItemClick('/fleet-locations'); return false;">fleet.locations()</a></li>
  <li><a href="#" onclick="onNavItemClick('/store-featured'); return false;">store.featured()</a></li>
  <li><a href="#" onclick="onNavItemClick('/store-categories'); return false;">store.categories()</a></li>
  <li><a href="#" onclick="onNavItemClick('/store-products'); return false;">store.products()</a></li>
</ul>
`