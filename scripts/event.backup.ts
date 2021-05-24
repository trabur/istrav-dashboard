import { istrav } from 'istrav'
import { doEventSource } from './event.sources'

export async function doSaveEvents (to, from) {
  // object
  let es = await doEventSource('doSaveEvents', 'event.backup', null)

  // params
  es.arguements = {
    from: from || 'my-source',  // rabbitmq queue
    to: to || 'my-storage',     // mongodb collection
  }

  // perform
  let eventSource = await istrav.event.backup.save(es)

  // finish
  return eventSource
}

export async function getLoadEvents (from, to) {
  // object
  let es = await doEventSource('getLoadEvents', 'event.backup', null)
  
  // params
  es.arguements = {
    from: from || 'my-storage',  // mongodb collection
    to: to || 'my-source',       // rabbitmq queue
  }

  // perform
  let eventSource = await istrav.event.backup.load(es)

  // finish
  return eventSource
}

export async function doPlayEvents (source, state, stopAt) {
  // object
  let es = await doEventSource('doPlayEvents', 'event.backup', null)

  // params
  es.arguements = {
    source: source || 'my-source',  // rabbitmq queue
    state: state || 'my-state',     // node.js/postgresql
    stopAt: stopAt || Date.now()
  }

  // perform
  let eventSource = await istrav.event.backup.play(es)

  // finish
  return eventSource
}