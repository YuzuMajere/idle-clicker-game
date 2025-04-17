import {
  renderPageElements
} from './render-elements.js';
import {
  onButtonClick
} from './main-clicker-button.js';
import {
  resetLocalStorage
} from './reset-storage-button.js';
import {
  manualClickUpgrade
} from './manual-click-upgrade-button.js';
import {
  qpsUpgradeFirst
} from './qps-upgrade-button.js';



window.onload = () => {
  renderPageElements();
  const quidCount = document.querySelector('.container-body__quid-count-js');
  const manualClickCount = document.querySelector('.container-body__manual-click-count-js');
  const passiveCycleSpeed = document.querySelector('.container-body__passive-cycle-speed-js');
  const manualClickUpgradeCount = document.querySelector('.container-body__manual-click-upgrade-count-js');
  const manualClickUpgradeCost = document.querySelector('.manual-click__upgrade__cost-amount-js');
  const qpsUpgradeCount = document.querySelector('.container-body__qps-upgrade-count-js');
  const qpsUpgradeCost = document.querySelector('.qps-upgrade__cost-amount-js');

  quidCount.innerHTML = localStorage.getItem('quidCount') || 0;
  manualClickCount.innerHTML = localStorage.getItem('manualClickCount') || 0;
  passiveCycleSpeed.innerHTML = localStorage.getItem('passiveCycleSpeed') || 0;
  manualClickUpgradeCount.innerHTML = localStorage.getItem('manualClickUpgradeCount') || 0;
  manualClickUpgradeCost.innerHTML = localStorage.getItem('manualClickUpgradeCost') || 1;
  qpsUpgradeCount.innerHTML = localStorage.getItem('qpsUpgradeCount') || 0;
  qpsUpgradeCost.innerHTML = localStorage.getItem('qpsUpgradeCost') || 1;
};

setTimeout(() => {
  const buttonMainJs = document.querySelector('.container-body__button-js');
  buttonMainJs.addEventListener('click', onButtonClick);

  const resetButtonJs = document.querySelector('#reset-button-js');
  resetButtonJs.addEventListener('click', resetLocalStorage);

  const manualClickUpgradeJs = document.querySelector('.manual-click__upgrade-button-js');
  manualClickUpgradeJs.addEventListener('click', manualClickUpgrade);

  const qpsUpgradeJs = document.querySelector('.qps-upgrade-button-js');
  qpsUpgradeJs.addEventListener('click', () => {
    qpsUpgradeFirst();
  });


  setInterval(() => {
    const quidCount = document.querySelector('.container-body__quid-count-js');
    const passiveCycleSpeed = document.querySelector('.container-body__passive-cycle-speed-js');
    const qpsUpgradeCount = document.querySelector('.container-body__qps-upgrade-count-js');
    quidCount.innerHTML = parseInt(quidCount.innerHTML) + ((parseInt(passiveCycleSpeed.innerHTML) + 1) * parseInt(qpsUpgradeCount.innerHTML));
    localStorage.setItem('quidCount', quidCount.innerHTML);
  }, 500);

  const lastSession = localStorage.getItem('lastSession');

  if (lastSession) {
    const lastSessionDate = localStorage.getItem('lastSession');
    const timeSinceLastSession = (Date.now() - lastSessionDate) / 1000;
    const quidCount = document.querySelector('.container-body__quid-count-js');
    const passiveCycleSpeed = document.querySelector('.container-body__passive-cycle-speed-js');
    const qpsUpgradeCount = document.querySelector('.container-body__qps-upgrade-count-js');
    quidCount.innerHTML = parseInt(quidCount.innerHTML) + ((parseInt(passiveCycleSpeed.innerHTML) + 1) * parseInt(qpsUpgradeCount.innerHTML) * Math.floor(timeSinceLastSession));
    console.log(timeSinceLastSession);
  };

}, 1);

window.onbeforeunload = () => localStorage.setItem('lastSession', Date.now());