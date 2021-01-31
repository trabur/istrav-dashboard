
/**
 * channels
 */
var Socket = require("./node_modules/phoenix/priv/static/phoenix.js").Socket
var w3cwebsocket = require("./node_modules/websocket/lib/websocket.js").w3cwebsocket

window.socket = new Phoenix.Socket("wss://channels.istrav.com/socket", {transport: w3cwebsocket})
