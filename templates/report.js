export let reportTemplate = /*html*/`
<nav>
  <div class="nav-wrapper">
    <div class="input-field">
      <input id="search" type="search" required value="my-output">
      <label class="label-icon" for="search"><i class="material-icons">inbox</i></label>
      <i class="material-icons">close</i>
    </div>
  </div>
</nav>
<div id="log" class="log"></div>
`

export function reportInit () {
  document.getElementById("search").addEventListener("change", myFunction);
  
  function myFunction() {
    var x = document.getElementById("search");
    x.value = x.value.toUpperCase();
  }
}