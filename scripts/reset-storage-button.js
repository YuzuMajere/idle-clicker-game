export function resetLocalStorage() {
  localStorage.removeItem('quidCount');
  localStorage.removeItem('manualClickCount');
  localStorage.removeItem('passiveCycleSpeed');
  localStorage.removeItem('manualClickUpgradeCount');
  localStorage.removeItem('manualClickUpgradeCost');
  localStorage.removeItem('qpsUpgradeCount');
  localStorage.removeItem('qpsUpgradeCost');
  localStorage.removeItem('lastSession');


  const quidCount = document.querySelector('.container-body__quid-count-js');
  const manualClickCount = document.querySelector('.container-body__manual-click-count-js');
  const passiveCycleSpeed = document.querySelector('.container-body__passive-cycle-speed-js');
  const manualClickUpgradeCount = document.querySelector('.container-body__manual-click-upgrade-count-js');
  const manualClickUpgradeCost = document.querySelector('.manual-click__upgrade__cost-amount-js');
  const qpsUpgradeCount = document.querySelector('.container-body__qps-upgrade-count-js');
  const qpsUpgradeCost = document.querySelector('.qps-upgrade__cost-amount-js');


  quidCount.innerHTML = 0;
  manualClickCount.innerHTML = 0;
  passiveCycleSpeed.innerHTML = 0;
  manualClickUpgradeCount.innerHTML = 0;
  manualClickUpgradeCost.innerHTML = 1;
  qpsUpgradeCount.innerHTML = 0;
  qpsUpgradeCost.innerHTML = 1;
}