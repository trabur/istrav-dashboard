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
    arguements: {}                       // pass params
  }
}