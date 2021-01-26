export async function doEventSource (state, event) {
  // state: data on a single sqljs/node.js node in a cluster of many other server nodes
  console.log(`let state = ${JSON.stringify(state, null, 2)}`)

  // event: sent to AMQP then to each node in the cluster with mongodb for backup
  console.log(`let event = ${JSON.stringify(event, null, 2)}`)

  // always return an event object with these required props:
  return {
    id: window.id(),           // random number
    createdAt: Date.now(),     // current time
    source: 'event.sources()', // data relation
    script: 'doEventSource',   // cqrs
    payload: undefined,        // undefined = command
    // payload: {},            // defined = query
    logging: 'main-log',       // phoenix.js
    backup: 'main-backup',     // rabbitmq/mongodb
  }
}

export async function doPublish (state, event) {
  let queueId = 'my-events'

  await state.event.sources.publish(queueId, {
    hello: 'world'
  })
  return event
}

export async function getConsume (state, event) {
  let queueId = 'my-events'
  let ack = false // add/remove message from queue

  event.payload = await state.event.sources.consume(queueId, { ack })
  return event
}

export async function getCheck (state, event) {
  let queueId = 'my-events'

  event.payload = await state.event.sources.check(queueId)
  return event
}