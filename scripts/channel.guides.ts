import { istrav } from 'istrav'
import { scripts } from './all'

export async function getSave (appId, token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'channel.guides')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      name: 'test',
      slug: 'test'
    }
  }

  // perform
  let eventSource = await istrav.channel.guides.save(es)

  // finish
  return eventSource
}

export async function getAll (appId) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'channel.guides')

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.channel.guides.all(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, slug, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'channel.guides')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...',
    change: change || {
      name: 'test'
    }
  }

  // perform
  let eventSource = await istrav.channel.guides.update(es)

  // finish
  return eventSource
}

export async function getOne (appId, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'channel.guides')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'this-slug'
  }

  // perform
  let eventSource = await istrav.channel.guides.get(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'channel.guides')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'slug-here'
  }

  // perform
  let eventSource = await istrav.channel.guides.remove(es)

  // finish
  return eventSource
}

export async function getVideos (appId, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getVideos', 'channel.guides')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'slug-here'
  }

  // perform
  let eventSource = await istrav.channel.guides.videos(es)

  // finish
  return eventSource
}