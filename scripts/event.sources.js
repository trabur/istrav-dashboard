export async function doEventSource (scriptId, sourceId, logTo, backupTo) {
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

export async function doPublish (topic, body) {
  // remember to always return an event object
  let eventSource = await scripts.doEventSource('doPublish')

  // make sure all arguements are saved to the event object
  eventSource.topic = topic || 'my-events'
  eventSource.body = body || { hello: "world" }

  // perform the doPublish thing
  await istrav.event.sources.publish(eventSource.topic, eventSource.body)

  // finish
  return eventSource
}

export async function getConsume (topic, noAck) {
  // object
  let eventSource = await scripts.doEventSource('getConsume')

  // arguements
  eventSource.topic = topic || 'my-events'
  if (noAck === undefined) {
    eventSource.noAck = true // false = keep & true = remove
  } else {
    eventSource.noAck = noAck
  }

  // perform
  eventSource.payload = await istrav.event.sources.consume(eventSource.topic, { noAck: eventSource.noAck })

  // finish
  return eventSource
}

export async function getCheck (topic) {
  let eventSource = await scripts.doEventSource('getCheck')
  eventSource.topic = topic || 'my-events'

  eventSource.payload = await istrav.event.sources.check(eventSource.topic)
  return eventSource
}