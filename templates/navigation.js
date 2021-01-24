export let navigationTemplate = /*html*/`
<ul style="font-size: 1.4em; font-family: monospace; list-style-type: none; text-align: center; margin: 0; padding: 0;">
  <li><a href="#" onclick="onNavItemClick('/account-users'); return false;">account.users()</a></li>
  <li><a href="#" onclick="onNavItemClick('/account-cart'); return false;">account.cart()</a></li>
  <li><a href="#" onclick="onNavItemClick('/account-orders'); return false;">account.orders()</a></li>
  <li><a href="#" onclick="onNavItemClick('/fleet-vehicles'); return false;">fleet.vehicles()</a></li>
  <li><a href="#" onclick="onNavItemClick('/fleet-employees'); return false;">fleet.employees()</a></li>
  <li><a href="#" onclick="onNavItemClick('/fleet-customers'); return false;">fleet.customers()</a></li>
  <li><a href="#" onclick="onNavItemClick('/fleet-locations'); return false;">fleet.locations()</a></li>
  <li><a href="#" onclick="onNavItemClick('/store-featured'); return false;">store.featured()</a></li>
  <li><a href="#" onclick="onNavItemClick('/store-categories'); return false;">store.categories()</a></li>
  <li><a href="#" onclick="onNavItemClick('/store-collections'); return false;">store.collections()</a></li>
  <li><a href="#" onclick="onNavItemClick('/store-products'); return false;">store.products()</a></li>
  <li><a href="#" onclick="onNavItemClick('/meta-channels'); return false;">meta.channels()</a></li>
  <li><a href="#" onclick="onNavItemClick('/meta-messages'); return false;">meta.messages()</a></li>
  <li><a href="#" onclick="onNavItemClick('/meta-logs'); return false;">meta.logs()</a></li>
</ul>
`