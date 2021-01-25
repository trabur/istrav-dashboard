export async function getAll (istrav, event) {
  event.payload = await istrav.account.users.all()
  return event
}