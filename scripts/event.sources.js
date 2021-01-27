
// window.eventSource = function (sourceId, scriptId, logTo, backupTo) {
//   return {
//     id: window.id(),
//     createdAt: Date.now(),
//     source: sourceId,
//     script: scriptId,
//     // payload: data,
//     logging: logTo, // send all console.logs to this phoenix.js channel/topic
//     backup: backupTo, // send this return { ... } to rabbitmq exchange/queue
//   }
// }

export async function doEventSource (scriptId, sourceId, logTo, backupTo) {
  // always return an event object with these required props:
  return {
    id: window.id(),                     // random number
    createdAt: Date.now(),               // current time
    source: sourceId || 'event.sources()', // data relation
    script: scriptId || 'doEventSource', // cqrs
    payload: undefined,                  // undefined = command
    // payload: {},                      // defined = query
    logging: logTo || 'main-log',        // phoenix.js
    backup: backupTo || 'main-backup',   // rabbitmq/mongodb
  }
}

export async function doPublish (topic, body) {
  let eventSource = await scripts.doEventSource('doPublish')
  eventSource.topic = topic || 'my-events'
  eventSource.body = body || { hello: "world" }

  await istrav.event.sources.publish(eventSource.topic, eventSource.body)
  return eventSource
}

export async function getConsume (topic, noAck) {
  let eventSource = await scripts.doEventSource('getConsume')
  eventSource.topic = topic || 'my-events'
  
  if (eventSource.noAck === undefined) {
    eventSource.noAck = true // false = keep & true = remove
  }

  eventSource.payload = await istrav.event.sources.consume(eventSource.topic, { noAck: eventSource.noAck })
  return eventSource
}

export async function getCheck (topic) {
  let eventSource = await scripts.doEventSource('getCheck')
  eventSource.topic = topic || 'my-events'

  eventSource.payload = await istrav.event.sources.check(eventSource.topic)
  return eventSource
}