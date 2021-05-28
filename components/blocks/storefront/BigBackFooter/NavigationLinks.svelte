<script>
  export let items
  export let app
</script>

<div class="footer">
  <br class="hide-on-small-and-down" />
  <br class="hide-on-small-and-down" />
  <br class="hide-on-small-and-down" />
  <div class="row" style="margin: 0;">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <div class="row" style="margin: 0; padding-top: 4.5em; padding-bottom: 1em;" >
        <div class="col s12 m6 l3">
          <div class="branding">
            <div class="name">{app.labelShort}</div>
            <hr>
            <div class="description">Head Office:</div>
            <div class="address">{app.labelAddressLine1 || '1100 Congress Ave,'}</div>
            <div class="address">{app.labelAddressLine2 || 'Austin, TX 78701'}</div>
            {#if app.labelEmail}
              <hr>
              <div class="description">Email:</div>
              <div class="address">{app.labelEmail}</div>
            {/if}
          </div>
          <ul class="conditions">
            <li>
              <a href={`https://www.${app.domain}/terms-of-use`}>Terms of Use</a>
            </li>
            <li>
              <a href={`https://www.${app.domain}/terms-of-sale`}>Terms of Sale</a>
            </li>
            <li>
              <a href={`https://www.${app.domain}/privacy-policy`}>Privacy Policy</a>
            </li>
          </ul>
        </div>
        {#each items as item (item.url)}
          <div class="col s12 m6 l3">
            <ul>
              <li style="width: 100%;">
                <h5 style="text-align: center;"><a class="title" href={item.url}>{item.name}</a></h5>
              </li>
              {#each item.children as item (item.url)}
                <li style="width: 100%; text-align: center;"><a class="title" href={item.url}>{item.name}</a></li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <br class="hide-on-small-and-down" />
  <br class="hide-on-small-and-down" />
  <br class="hide-on-small-and-down" />
</div>

<style>
  .footer {
    background: #eee;
    color: #111;
  }

  .title {
    color: #111;
  }

  .branding {
    padding: 0.5em 0.5em 1em 0.5em;
    background: #ccc;
    border-radius: 1em;
  }
  .name {
    color: #111;
    font-size: 2em;
    font-weight: 800;
    text-align: center;
  }
  .description {
    font-weight: bold;
  }
  .conditions {
    margin: 0;
    text-align: center;
  }
  .conditions a {
    color: #333;
  }
</style>