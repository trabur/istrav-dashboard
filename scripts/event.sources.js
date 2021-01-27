
window.eventSource = function (sourceId, scriptId, logTo, backupTo) {
  return {
    id: window.id(),
    createdAt: Date.now(),
    source: sourceId,
    script: scriptId,
    // payload: data,
    logging: logTo, // send all console.logs to this phoenix.js channel/topic
    backup: backupTo, // send this return { ... } to rabbitmq exchange/queue
  }
}

export async function doEventSource (scriptId, sourceId, logTo, backupTo) {
  // state: data on a single sqljs/node.js node in a cluster of many other server nodes
  // console.log(`let state = ${JSON.stringify(state, null, 2)}`)

  // event: sent to AMQP then to each node in the cluster with mongodb for backup
  // console.log(`let event = ${JSON.stringify(event, null, 2)}`)

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
  let queueId = topic || 'my-events'
  let message = body || { hello: "world" }

  let eventSource = scripts.doEventSource('doPublish', 'event.sources()')
  await istrav.event.sources.publish(queueId, eventSource)

  return eventSource
}

export async function getConsume (state, event) {
  let queueId = 'my-events'
  let noAck = true // keep or remove message from queue

  event.payload = await state.event.sources.consume(queueId, { noAck })
  return event
}

export async function getCheck (state, event) {
  let queueId = 'my-events'

  event.payload = await state.event.sources.check(queueId)
  return event
}