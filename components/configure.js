export let configure = function (istrav) {
  let backend
  if (window.location.host === 'localhost:6006') {
    backend = 'http://localhost:1337'
  } else {
    backend = 'https://api.hacktracks.org'
  }
  
  istrav.account.carts.init({ host: backend })
  istrav.account.orders.init({ host: backend })
  istrav.account.users.init({ host: backend })
  istrav.app.blocks.init({ host: backend })
  istrav.app.faq.init({ host: backend })
  istrav.app.menus.init({ host: backend })
  istrav.app.pages.init({ host: backend })
  istrav.channel.guides.init({ host: backend })
  istrav.channel.playlists.init({ host: backend })
  istrav.channel.videos.init({ host: backend })
  istrav.store.categories.init({ host: backend })
  istrav.store.collections.init({ host: backend })
  istrav.store.products.init({ host: backend })
  istrav.subscription.licenses.init({ host: backend })
  istrav.subscription.plans.init({ host: backend })
  istrav.tenant.apps.init({ host: backend })
  istrav.tenant.members.init({ host: backend })
}