export async function doEventSource (scriptId, sourceId, logTo, backupTo) {
  // console.log('welcome to istrav')

  // always return an event object with these required props:
  return {
    id: window.id(),                     // random number
    createdAt: Date.now(),               // current time
    source: sourceId || 'event.sources', // data relation
    script: scriptId || 'doEventSource', // cqrs
    payload: undefined,                  // undefined = command
    // payload: {},                      // defined = query
    logging: logTo || 'main-log',        // phoenix.js
    backup: backupTo || 'main-backup',   // rabbitmq/mongodb
  }
}

export async function doPublish (id, body) {
  // remember to always return an event object
  let es = await scripts.doEventSource('doPublish')

  // make sure all arguements are saved to the event object
  es.arguements = {
    id: id || 'my-events',
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

  // arguements
  es.arguements = {
    id: id || 'my-events'
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

  // arguements
  es.arguements = {
    id: id || 'my-events'
  }

  // perform
  let eventSource = await istrav.event.sources.check(es)

  // finish
  return eventSource
}