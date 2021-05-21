import { istrav } from 'istrav'
import * as scripts from './scripts.ts'

export async function getAll (appId) {
  // object
  let es = await scripts.event.sources.doEventSource('getAll', 'channel.videos')

  // params
  es.arguements = {
    appId: appId || 'my-app'
  }

  // perform
  let eventSource = await istrav.channel.videos.all(es)

  // finish
  return eventSource
}

export async function getSave (appId, token, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getSave', 'channel.videos')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    change: change || {
      name: 'istrav.com',
      slug: 'istrav.com',
      image: "IMG-0695.jpg",
      video: 'sdkjhsdhj.mp4',
      description: ""
    }
  }

  // perform
  let eventSource = await istrav.channel.videos.save(es)

  // finish
  return eventSource
}

export async function getOne (appId, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getOne', 'channel.videos')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.channel.videos.get(es)

  // finish
  return eventSource
}

export async function getUpdate (appId, token, slug, change) {
  // object
  let es = await scripts.event.sources.doEventSource('getUpdate', 'channel.videos')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...',
    change: change || {
      video: 'sdgsgrdfg.mp4',
    }
  }

  // perform
  let eventSource = await istrav.channel.videos.update(es)

  // finish
  return eventSource
}

export async function getRemove (appId, token, slug) {
  // object
  let es = await scripts.event.sources.doEventSource('getRemove', 'channel.videos')

  // params
  es.arguements = {
    appId: appId || 'my-app',
    token: token || '',
    slug: slug || 'fpuh348f38f...'
  }

  // perform
  let eventSource = await istrav.channel.videos.remove(es)

  // finish
  return eventSource
}