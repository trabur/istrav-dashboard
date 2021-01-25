// @ts-nocheck
export let eventSourcesTemplate = /*html*/`
<h1>DASHBOARD</h1>
<p>this dashboard is a collection of tools and utilities put together for running a robust and reliable service business. the dashboard navigation sits on the left, the dashboard controls sits in the center, while the dashboard reports get streamed on the right.</p>
<p>we've added event.sources() to the top because of it's importance. that's because we record a history of every command and every query that goes on around the frontend and backend. so let's get stared...</p>
<h2>event.sources()</h2>
<h3>>  data sorcery for wizards!</h3>
<p>most applications today are built around create, read, update, and delete or CRUD. that's not good enough for accounting level reliabilty; because with delete and update information is lost. meaning, if we update a model more than once ... our history is not kept. where data loss is not acceptable this is not good. in order to combat that every action is saved as an event. we then play out these events over a view to get our state. with our history getting backed up to mongodb we can replay all of the events over a new view for recovery, analytics, or w/e.</p>
<p></p>
`

export function eventSourcesInit () {
  console.log('event.sources()')
}