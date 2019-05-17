export default function loadPage() {
  const page = document.querySelector('body');
  page.innerHTML += `
    <main>
      <form class="search-bar">
        <input id="search-input" class="search-input search common" type="search" placeholder="Unleash your desires ;)">
        <button id="submit-button" class="submit-button search button common"type="submit"><i class="fa fa-search"></i></button>
      </form>
      <section class="videos">
        <div id="slider" class="slider"></div>
        <div class="paganation hidden">
          <button id="back" class="arrow button paganation-item common"><i class="fa fa-chevron-left"></i></button>
          <div class="current-page paganation-item common"></div>
          <button id="forward" class="arrow button paganation-item common"><i class="fa fa-chevron-right"></i></button>
        </div>
      </section>
    </main>
    `;
}
