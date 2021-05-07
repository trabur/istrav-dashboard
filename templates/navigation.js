export let navigationTemplate = /*html*/`
<ul style="font-size: 1.4em; font-family: monospace; list-style-type: none; text-align: center; margin: 0; padding: 0;">
  <li><a href="#" onclick="onNavItemClick('/event-sources'); return false;">event.sources()</a></li>
  <!--
  <li><a href="#" onclick="onNavItemClick('/event-backup'); return false;">event.backup()</a></li>
  <li><a href="#" onclick="onNavItemClick('/event-logging'); return false;">event.logging()</a></li>
  -->
  <li><a href="#" onclick="onNavItemClick('/tenant-members'); return false;">tenant.members()</a></li>
  <li><a href="#" onclick="onNavItemClick('/tenant-apps'); return false;">tenant.apps()</a></li>
  <li><a href="#" onclick="onNavItemClick('/app-menus'); return false;">app.menus()</a></li>
  <li><a href="#" onclick="onNavItemClick('/app-blocks'); return false;">app.blocks()</a></li>
  <li><a href="#" onclick="onNavItemClick('/app-pages'); return false;">app.pages()</a></li>
  <li><a href="#" onclick="onNavItemClick('/app-faq'); return false;">app.faq()</a></li>
  <li><a href="#" onclick="onNavItemClick('/store-collections'); return false;">store.collections()</a></li>
  <li><a href="#" onclick="onNavItemClick('/store-categories'); return false;">store.categories()</a></li>
  <li><a href="#" onclick="onNavItemClick('/store-products'); return false;">store.products()</a></li>
  <li><a href="#" onclick="onNavItemClick('/account-users'); return false;">account.users()</a></li>
  <li><a href="#" onclick="onNavItemClick('/account-carts'); return false;">account.carts()</a></li>
  <li><a href="#" onclick="onNavItemClick('/account-orders'); return false;">account.orders()</a></li>
  <li><a href="#" onclick="onNavItemClick('/subscription-licenses'); return false;">subscription.licenses()</a></li>
  <li><a href="#" onclick="onNavItemClick('/subscription-plans'); return false;">subscription.plans()</a></li>
  <li><a href="#" onclick="onNavItemClick('/channel-videos'); return false;">channel.videos()</a></li>
  <li><a href="#" onclick="onNavItemClick('/channel-guides'); return false;">channel.guides()</a></li>
  <li><a href="#" onclick="onNavItemClick('/channel-playlists'); return false;">channel.playlists()</a></li>
</ul>
`