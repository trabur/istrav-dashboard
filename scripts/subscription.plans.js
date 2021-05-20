import { istrav } from 'istrav'
import { scripts } from './headless.js'

export async function getAll (appId) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'subscription.plans')

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.subscription.plans.all(es)

  // finish
  return eventSource
}

export async function getSave (appId, token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'subscription.plans')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      name: 'istrav.com',
      slug: 'istrav.com',
      categoryId: "plain",
      image: "IMG-0695.jpg",
      price: 23.00,
      details: "",
      description: ""
    }
  }

  // perform
  let eventSource = await istrav.subscription.plans.save(es)

  // finish
  return eventSource
}

export async function getOne (appId, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'subscription.plans')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.subscription.plans.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, slug, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'subscription.plans')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...',
    change: change || {
      price: 25.00
    }
  }

  // perform
  let eventSource = await istrav.subscription.plans.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'subscription.plans')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.subscription.plans.remove(es)

  // finish
  return eventSource
}