export async function doPublish (state, event) {
  // name of rabbitmq queue
  let id = 'my-stream'

  await state.event.logging.publish(id, {
    hello: 'world'
  })
  return event
}