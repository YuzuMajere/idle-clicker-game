export function onButtonClick() {
  const quidCount = document.querySelector('.container-body__quid-count-js');
  const manualClickCount = document.querySelector('.container-body__manual-click-count-js');
  const passiveCycleSpeed = document.querySelector('.container-body__passive-cycle-speed-js');
  const quidOnClick = document.querySelector('.container-body__manual-click-upgrade-count-js');
  quidCount.innerHTML = parseInt(quidCount.innerHTML) + parseInt(quidOnClick.innerHTML) + 1;
  manualClickCount.innerHTML = parseInt(manualClickCount.innerHTML) + 1;

  function addToLocalStorage() {
    localStorage.setItem('quidCount', quidCount.innerHTML);
    localStorage.setItem('manualClickCount', manualClickCount.innerHTML);
    localStorage.setItem('passiveCycleSpeed', passiveCycleSpeed.innerHTML);
  }
  addToLocalStorage();
};