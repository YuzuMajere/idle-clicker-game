export function manualClickUpgrade() {
  const upgradeCount = document.querySelector('.container-body__manual-click-upgrade-count-js');
  const upgradeCost = document.querySelector('.manual-click__upgrade__cost-amount-js');
  const quidCount = document.querySelector('.container-body__quid-count-js');


  if (parseInt(quidCount.innerHTML) < parseInt(upgradeCost.innerHTML)) return alert('Not enough money!');

  upgradeCount.innerHTML = parseInt(upgradeCount.innerHTML) + 1;
  quidCount.innerHTML = parseInt(quidCount.innerHTML) - parseInt(upgradeCost.innerHTML);

  function calculateUpgradeCost(upgradeCost) {
    if (parseInt(upgradeCost.innerHTML) === 1) {
      upgradeCost.innerHTML = 2;
    } else {
      upgradeCost.innerHTML = Math.round(parseInt(upgradeCost.innerHTML) * 1.4);
    }
  };

  calculateUpgradeCost(upgradeCost);


  localStorage.setItem('manualClickUpgradeCount', upgradeCount.innerHTML);
  localStorage.setItem('quidCount', quidCount.innerHTML);
  localStorage.setItem('manualClickUpgradeCost', upgradeCost.innerHTML);
}