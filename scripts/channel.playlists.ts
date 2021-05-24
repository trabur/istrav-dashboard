import { istrav } from 'istrav'
import { doEventSource } from './event.sources'

export async function getSave (appId, token, change) {
  // object
  let es = await doEventSource('getSave', 'channel.playlists', null)

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
  let eventSource = await istrav.channel.playlists.save(es)

  // finish
  return eventSource
}

export async function getAll (appId) {
  // object
  let es = await doEventSource('getAll', 'channel.playlists', null)

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.channel.playlists.all(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, slug, change) {
  // object
  let es = await doEventSource('getUpdate', 'channel.playlists', null)

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
  let eventSource = await istrav.channel.playlists.update(es)

  // finish
  return eventSource
}

export async function getOne (appId, slug) {
  // object
  let es = await doEventSource('getOne', 'channel.playlists', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'this-slug'
  }

  // perform
  let eventSource = await istrav.channel.playlists.get(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, slug) {
  // object
  let es = await doEventSource('getRemove', 'channel.playlists', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'slug-here'
  }

  // perform
  let eventSource = await istrav.channel.playlists.remove(es)

  // finish
  return eventSource
}

export async function getGuides (appId, slug) {
  // object
  let es = await doEventSource('getGuides', 'channel.playlists', null)

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'slug-here'
  }

  // perform
  let eventSource = await istrav.channel.playlists.guides(es)

  // finish
  return eventSource
}