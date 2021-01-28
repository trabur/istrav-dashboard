export async function doEventSource (scriptId, folderId, stateId, sourceId, storageId, outputId) {
  // console.log('welcome to istrav')

  // always return an event object with these required props:
  return {
    id: window.id(32),                   // very long random string
    startAt: Date.now(),                 // set by client
    serverAt: null,                      // set by server
    finishAt: null,                      // set by client
    folder: folderId || 'event.sources', // data relation
    script: scriptId || 'doEventSource', // cqrs
    payload: undefined,                  // undefined = command
    // payload: {},                      // defined = query
    state: stateId || 'my-state',        // backup: node.js/postgresql
    source: sourceId || 'my-source',     // backup: rabbitmq queue
    storage: storageId || 'my-storage',  // backup: mongodb collection
    output: outputId || 'my-output'      // logging: phoenix.js
  }
}

export async function doPublish (id, body) {
  // remember to always return an event object
  let es = await scripts.doEventSource('doPublish')

  // make sure all arguements are saved to the event object
  es.arguements = {
    id: id || 'my-source',
    body: body || { hello: "world" }
  }

  // perform the doPublish thing
  let eventSource = await istrav.event.sources.publish(es)

  // finish block statement
  return eventSource
}

export async function getConsume (id, noAck) {
  // object
  let es = await scripts.doEventSource('getConsume')

  // params
  es.arguements = {
    id: id || 'my-source'
  }
  if (noAck === undefined) {
    es.arguements.noAck = true // false = keep & true = remove
  } else {
    es.arguements.noAck = noAck
  }

  // perform
  let eventSource = await istrav.event.sources.consume(es)

  // finish
  return eventSource
}

export async function getCheck (id) {
  // object
  let es = await scripts.doEventSource('getCheck')

  // params
  es.arguements = {
    id: id || 'my-source'
  }

  // perform
  let eventSource = await istrav.event.sources.check(es)

  // finish
  return eventSource
}