import { istrav } from '../node_modules/istrav/api/index.js'
import { scripts } from './headless.js'

export async function doEventSource (scriptId, folderId, roomId) {
  /**
   * primary key generator
   */
  function id (length) {
    var result  = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  // always return an event object with these required props:
  return {
    id: id(32),                          // very long random string
    timeAt: Date.now(),                  // set by this function
    serverAt: null,                      // set by server
    clientAt: null,                      // set by client
    folder: folderId || 'event.sources', // data relation
    script: scriptId || 'doEventSource', // cqrs
    payload: undefined,                  // undefined = command
    // payload: {},                      // defined = query
    io: roomId || 'my-room',             // socket.io: room id
  }
}

// export async function doPublish (id, body) {
//   // remember to always return an event object
//   let es = await scripts.event.sources.doEventSource('doPublish')
//   let demo = await scripts.event.sources.doEventSource('doEventSource')
//   demo.payload = { hello: "world" }

//   // make sure all arguements are saved to the event object
//   es.arguements = {
//     id: id || 'my-source',
//     body: body || demo
//   }

//   // perform the doPublish thing
//   let eventSource = await istrav.event.sources.publish(es)

//   // finish block statement
//   return eventSource
// }

// export async function getConsume (id, noAck) {
//   // object
//   let es = await scripts.event.sources.doEventSource('getConsume')

//   // params
//   es.arguements = {
//     id: id || 'my-source'
//   }
//   if (noAck === undefined) {
//     es.arguements.noAck = true // false = keep & true = remove
//   } else {
//     es.arguements.noAck = noAck
//   }

//   // perform
//   let eventSource = await istrav.event.sources.consume(es)

//   // finish
//   return eventSource
// }

// export async function getCheck (id) {
//   // object
//   let es = await scripts.event.sources.doEventSource('getCheck')

//   // params
//   es.arguements = {
//     id: id || 'my-source'
//   }

//   // perform
//   let eventSource = await istrav.event.sources.check(es)

//   // finish
//   return eventSource
// }