export function renderPageElements() {
  const containerMain = document.querySelector('.container-main-js');
  containerMain.innerHTML = `
    <div class="container-header container-header-js">
      <h1 class="container-header__title container-header__title-js">Clicker Game</h1>
    </div>

    <div class="container-body container-body-js">

      <div class="container-body__upgrades-grid container-body__upgrades-grid-js">

        <div class="container-body__upgrade container-body__upgrade-js manual-click__upgrade manual-click__upgrade-js">
          Manual Click Upgrade
        <div class="container-body__manual-click-upgrade-count container-body__manual-click-upgrade-count-js container-body__upgrade-button-count-css">
          0
        </div>
          <button class="manual-click__upgrade-button manual-click__upgrade-button-js upgrades__button">Upgrade
            <div class="manual-click__upgrade__cost manual-click__upgrade__cost-js upgrade-cost-css">
              Cost: <span class="manual-click__upgrade__cost-amount manual-click__upgrade__cost-amount-js">1</span></div>
          </button>
        </div>


        <div class="container-body__upgrade container-body__upgrade-js">
          Quid Per Second Upgrade
        <div class="container-body__qps-upgrade-count container-body__qps-upgrade-count-js container-body__upgrade-button-count-css">
          0
        </div>
          <button class="qps-upgrade-button qps-upgrade-button-js upgrades__button">Upgrade
            <div class="qps-upgrade__cost qps-upgrade__cost-js upgrade-cost-css">
              Cost: <span class="qps-upgrade__cost-amount qps-upgrade__cost-amount-js">1</span></div>
          </button>
        </div>

      </div>


      <div class="container-body__names-for-counters-grid container-body__names-for-counters-grid-js">
        <div class="container-body__money-name container-body__money-name-js">Money</div>
        <div class="container-body__clicks-name container-body__clicks-name-js">Clicks</div>
        <div class="container-body__income-name container-body__income-name-js">Income</div>
      </div>


      <div class="container-body__counters-grid container-body__counters-grid-js">
        <div class="container-body__quid-count container-body__quid-count-js">0</div>
        <div class="container-body__manual-click-count container-body__manual-click-count-js">0</div>
        <div class="container-body__passive-cycle-speed container-body__passive-cycle-speed-js">1</div>
      </div>


      <button class="container-body__button container-body__button-js" id="clicker-button-js">Click me!</button>

      <button class="container-body__button container-body__button-js" id="reset-button-js">Reset</button>

    </div>
  `;
};